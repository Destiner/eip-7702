# EIP-7702

Documentation for [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702), the
Ethereum upgrade that lets an EOA set its account code.

Published at [eip7702.io](https://eip7702.io).

## Development

Built with [Vocs](https://vocs.dev). Pages live in `docs/pages`.

```sh
bun install
bun run dev
```

To create a production build:

```sh
bun run build
bun run preview
```

## Cloudflare deployment

`bun run build:cloudflare` uses Vocs full-static rendering. The Worker serves
only `dist/public`, which contains the HTML and Waku React Server Component
payloads used by client-side navigation. On the four docs URLs, the Worker uses
Vocs negotiation rules: browsers, search crawlers and link-preview bots get HTML;
terminal clients, AI crawlers and requests with `Accept: text/markdown` get
Markdown, subject to the crawler exceptions. Direct `.md` URLs (including
`/index.md` for the overview) are still available. The default build is unchanged.

```sh
bun install --frozen-lockfile
bun run build:cloudflare
npx wrangler@4.167.0 dev
# In another terminal:
bun run smoke:cloudflare
```

Pushes to `main` upload and promote a commit-tagged Worker version, then smoke-test
it on `workers.dev`. CI uses a Worker-scoped token, so changes to production route
bindings are applied separately with `npx wrangler@4.167.0 triggers deploy`.

## Contributing

Corrections and additions are welcome, particularly to the
[ecosystem](docs/pages/ecosystem.mdx) page as tooling support evolves. Each page
has an "Edit on GitHub" link at the bottom.

---

Made by [Destiner](https://destiner.io).
