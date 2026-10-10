// Meta Conversions API relay (Cloudflare Pages Function).
// Set these in your host's environment variables (never in index.html):
//   META_CAPI_TOKEN        - the Conversions API access token
//   META_TEST_EVENT_CODE   - optional, e.g. TEST12345 (only while testing)
const PIXEL_ID = '1796075938212043'; // dataset "Hrithik's Furniture"
const GRAPH_VERSION = 'v21.0';

const sha256 = async (value) => {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
};

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } });

export async function onRequestPost({ request, env }) {
  if (!env.META_CAPI_TOKEN) return json({ error: 'Token not configured' }, 500);

  let body;
  try { body = await request.json(); } catch { return json({ error: 'Bad JSON' }, 400); }

  const user = {
    client_ip_address: request.headers.get('CF-Connecting-IP') || undefined,
    client_user_agent: request.headers.get('User-Agent') || undefined,
  };
  if (body.fbp) user.fbp = String(body.fbp);
  if (body.fbc) user.fbc = String(body.fbc);

  const email = String(body.email || '').trim().toLowerCase();
  if (email) user.em = [await sha256(email)];

  let phone = String(body.phone || '').replace(/\D/g, '');
  if (phone.length === 10) phone = '91' + phone; // assume India if no country code
  if (phone.length >= 11) user.ph = [await sha256(phone)];

  const parts = String(body.name || '').trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (parts[0]) user.fn = [await sha256(parts[0])];
  if (parts.length > 1) user.ln = [await sha256(parts[parts.length - 1])];

  const payload = {
    data: [{
      event_name: 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      event_id: String(body.event_id || ''), // same ID as the browser Pixel, so Meta de-duplicates
      action_source: 'website',
      event_source_url: String(body.event_source_url || ''),
      user_data: user,
    }],
  };
  if (env.META_TEST_EVENT_CODE) payload.test_event_code = env.META_TEST_EVENT_CODE;

  const res = await fetch(
    `https://graph.facebook.com/${GRAPH_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(env.META_CAPI_TOKEN)}`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }
  );
  return json(await res.json().catch(() => ({})), res.ok ? 200 : 502);
}
