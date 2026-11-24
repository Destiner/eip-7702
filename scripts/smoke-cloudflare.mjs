import assert from "node:assert/strict";

const base = new URL(process.argv[2] ?? "http://localhost:8787").origin;
const routes = [
  ["/", "Overview", "_root"],
  ["/reference", "Reference", "reference"],
  ["/examples", "Examples", "examples"],
  ["/ecosystem", "Ecosystem", "ecosystem"],
];

async function request(path, status, contentType) {
  const response = await fetch(new URL(path, base), {
    redirect: "manual",
    signal: AbortSignal.timeout(15_000),
  });
  assert.equal(response.status, status, path);
  assert.match(response.headers.get("content-type") ?? "", contentType, path);
  return response;
}

const assets = new Set();
for (const [path, title, rsc] of routes) {
  const html = await (await request(path, 200, /^text\/html\b/)).text();
  assert.match(html, new RegExp(`<h1[^>]*>${title}</h1>`), path);
  assert.match(
    html,
    /<meta property="og:image" content="https:\/\/eip7702\.io\/assets\/card\.png"/,
    path,
  );
  for (const [, asset] of html.matchAll(
    /(?:src|href)="(\/assets\/[^" ]+\.(?:js|css))"/g,
  )) {
    assets.add(asset);
  }

  const data = await (
    await request(`/RSC/R/${rsc}.txt`, 200, /^text\/plain\b/)
  ).text();
  assert.match(data, /^\w+:I\[/, `React Flight data for ${path}`);
  assert.ok(data.includes(title), `React Flight content for ${path}`);
}

for (const ext of [".js", ".css"]) {
  assert.ok(
    [...assets].some((asset) => asset.endsWith(ext)),
    `No ${ext} assets`,
  );
}
await Promise.all(
  [...assets].map(async (path) => {
    const type = path.endsWith(".css") ? /^text\/css\b/ : /javascript\b/;
    await (await request(path, 200, type)).body.cancel();
  }),
);

const card = await (
  await request("/assets/card.png", 200, /^image\/png\b/)
).arrayBuffer();
assert.equal(
  Buffer.from(card).subarray(0, 8).toString("hex"),
  "89504e470d0a1a0a",
);
const missing = await request(
  "/__smoke-test-missing-page__",
  404,
  /^text\/html\b/,
);
assert.match(await missing.text(), /Page not found/);
console.log(`Smoke checks passed: ${base}`);
