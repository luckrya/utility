import { defineConfig } from "vitepress";

export default defineConfig({
  title: "@luckrya/utility",
  description: "一个实用的 JavaScript 工具函数库，在工作中提取和总结",
  lang: "zh-CN",
  base: "/utility",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "@luckrya/utility",
      description: "一个实用的 JavaScript 工具函数库，在工作中提取和总结",
    },
    "/en/": {
      lang: "en-US",
      title: "@luckrya/utility",
      description:
        "A practical library of JavaScript tool functions extracted and summarized at work",
    },
  },
  themeConfig: {
    logo: {
      dark: "/logo-dark.png",
      light: "/logo.png",
    },

    localeLinks: {
      text: "",
      items: [
        {
          text: "简体中文",
          link: "/",
        },
        {
          text: "English",
          link: "/en/",
        },
      ],
    },

    sidebar: {
      // BUG: vitepress locales i118
      "/en/": [
        {
          text: "APIS",
          items: [
            {
              text: "isUndefined",
              link: "/en/apis/data-type-judgment/isUndefined",
            },
            {
              text: "isNull",
              link: "/en/apis/data-type-judgment/isNull",
            },
            {
              text: "isNaN",
              link: "/en/apis/data-type-judgment/isNaN",
            },
            {
              text: "isString",
              link: "/en/apis/data-type-judgment/isString",
            },
            {
              text: "isBoolean",
              link: "/en/apis/data-type-judgment/isBoolean",
            },
            {
              text: "isTrue",
              link: "/en/apis/data-type-judgment/isTrue",
            },
            {
              text: "isFalse",
              link: "/en/apis/data-type-judgment/isFalse",
            },
            {
              text: "isNumber",
              link: "/en/apis/data-type-judgment/isNumber",
            },
            {
              text: "isArray",
              link: "/en/apis/data-type-judgment/isArray",
            },
            {
              text: "isError",
              link: "/en/apis/data-type-judgment/isError",
            },
            {
              text: "isFunction",
              link: "/en/apis/data-type-judgment/isFunction",
            },
            {
              text: "isDate",
              link: "/en/apis/data-type-judgment/isDate",
            },
            {
              text: "isObjectNonNull",
              link: "/en/apis/data-type-judgment/isObjectNonNull",
            },
            {
              text: "isPureObject",
              link: "/en/apis/data-type-judgment/isPureObject",
            },
          ],
        },
      ],

      "/": [
        {
          text: "函数",
          items: [
            {
              text: "isUndefined",
              link: "/apis/data-type-judgment/isUndefined",
            },
            {
              text: "isNull",
              link: "/apis/data-type-judgment/isNull",
            },
            {
              text: "isNaN",
              link: "/apis/data-type-judgment/isNaN",
            },
            {
              text: "isString",
              link: "/apis/data-type-judgment/isString",
            },
            {
              text: "isBoolean",
              link: "/apis/data-type-judgment/isBoolean",
            },
            {
              text: "isTrue",
              link: "/apis/data-type-judgment/isTrue",
            },
            {
              text: "isFalse",
              link: "/apis/data-type-judgment/isFalse",
            },
            {
              text: "isNumber",
              link: "/apis/data-type-judgment/isNumber",
            },
            {
              text: "isArray",
              link: "/apis/data-type-judgment/isArray",
            },
            {
              text: "isError",
              link: "/apis/data-type-judgment/isError",
            },
            {
              text: "isFunction",
              link: "/apis/data-type-judgment/isFunction",
            },
            {
              text: "isDate",
              link: "/apis/data-type-judgment/isDate",
            },
            {
              text: "isObjectNonNull",
              link: "/apis/data-type-judgment/isObjectNonNull",
            },
            {
              text: "isPureObject",
              link: "/apis/data-type-judgment/isPureObject",
            },
          ],
        },
      ],
    },

    footer: {
      copyright: `Copyright © 2022-${new Date().getFullYear()} R.Y`,
    },
  },

  vite: {
    server: {
      port: 2022,
    },
  },
});
