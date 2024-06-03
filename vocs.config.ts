import { defineConfig } from "vocs";

export default defineConfig({
  title: "EIP-7702",
  theme: {
    accentColor: {
      light: "#664400",
      dark: "#ffab00",
    },
  },
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
