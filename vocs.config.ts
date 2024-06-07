import { defineConfig } from "vocs";

export default defineConfig({
  title: "EIP-7702",
  theme: {
    accentColor: "#ffab00",
  },
  ogImageUrl: "https://eip7702.io/assets/card.png",
  editLink: {
    pattern: "https://github.com/Destiner/eip-7702/edit/main/docs/pages/:path",
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
});
