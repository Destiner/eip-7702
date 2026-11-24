// Vocs ships this helper but does not expose it through package exports.
import {
  prefersMarkdown,
  representationVary,
} from "./node_modules/vocs/dist/internal/markdown-negotiation.js";

export default {
  async fetch(request: Request, env: { ASSETS: { fetch: typeof fetch } }) {
    const url = new URL(request.url);
    const markdown = prefersMarkdown({
      pathname: url.pathname,
      userAgent: request.headers.get("User-Agent") ?? "",
      accept: request.headers.get("Accept") ?? "",
    });
    if (markdown)
      url.pathname = url.pathname === "/" ? "/index.md" : `${url.pathname}.md`;

    const asset = await env.ASSETS.fetch(
      markdown ? new Request(url, request) : request,
    );
    const response = new Response(asset.body, asset);
    response.headers.append("Vary", representationVary);
    return response;
  },
};
