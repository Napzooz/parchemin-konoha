import { getStore } from "@netlify/blobs";
export default async (req) => {
  if (req.method !== "GET") return new Response("Method not allowed", { status: 405 });
  const expected = process.env.ADMIN_TOKEN || "";
  const received = req.headers.get("x-admin-token") || "";
  if (!expected || received.length !== expected.length) return Response.json({error:"Unauthorized"}, {status:401});
  let mismatch = 0; for (let i=0;i<expected.length;i++) mismatch |= expected.charCodeAt(i) ^ received.charCodeAt(i);
  if (mismatch) return Response.json({error:"Unauthorized"}, {status:401});
  const store = getStore("konoha-scroll-stats");
  const data = await store.get("stats", { type: "json" }) || { total: 0, visitors: {}, events: [] };
  return Response.json({
    totalOpens: data.total || 0,
    distinctBrowsers: Object.keys(data.visitors || {}).length,
    recent: (data.events || []).slice(0,100)
  });
};
