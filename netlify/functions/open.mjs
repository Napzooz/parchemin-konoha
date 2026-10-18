import { getStore } from "@netlify/blobs";
export default async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  let body;
  try { body = await req.json(); } catch { return Response.json({error:"Invalid JSON"}, {status:400}); }
  const visitorId = String(body?.visitorId || "");
  if (!/^[a-f0-9-]{20,80}$/i.test(visitorId)) return Response.json({error:"Invalid visitor id"}, {status:400});
  const store = getStore("konoha-scroll-stats");
  const current = await store.get("stats", { type: "json" }) || { total: 0, visitors: {}, events: [] };
  const now = new Date().toISOString();
  const isNew = !current.visitors[visitorId];
  if (isNew) current.visitors[visitorId] = { firstSeen: now, lastSeen: now, opens: 1 };
  else { current.visitors[visitorId].lastSeen = now; current.visitors[visitorId].opens += 1; }
  current.total += 1;
  current.events.unshift({ at: now, visitor: visitorId.slice(0,8), isNew });
  current.events = current.events.slice(0,500);
  await store.setJSON("stats", current);
  return Response.json({ ok: true });
};
