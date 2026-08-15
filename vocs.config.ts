import { defineConfig } from "vocs/config";

export default defineConfig({
  title: "EIP-7702",
  description: "Set EOA account code",
  accentColor: "#ffab00",
  // Pages live in docs/pages rather than the default src/pages.
  srcDir: "docs",
  // Twoslash renders viem's JSDoc into hover tooltips, and that JSDoc contains
  // links relative to viem.sh which resolve as dead here. Warn rather than fail.
  checkDeadlinks: "warn",
  ogImageUrl: "https://eip7702.io/assets/card.png",
  editLink: {
    link: "https://github.com/Destiner/eip-7702/edit/main/docs/pages/:path",
    text: "Edit on GitHub",
  },
  topNav: [
    {
      text: "EIP",
      link: "https://eips.ethereum.org/EIPS/eip-7702",
    },
  ],
  sidebar: [
    {
      text: "Overview",
      link: "/",
    },
    {
      text: "Reference",
      link: "/reference",
    },
    {
      text: "Examples",
      link: "/examples",
    },
    {
      text: "Ecosystem",
      link: "/ecosystem",
    },
  ],
  head: {
    script: [
      { textContent: `window.metrical = { "app": "sTsmB_tjp" }` },
      { src: "https://cdn.metrical.xyz/script.js", async: true },
    ],
  },
});
