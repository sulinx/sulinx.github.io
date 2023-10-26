import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "A Blog",
  description: "A Blog",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
