export default defineAppConfig({
  title: "Institute to Innovate (i2i)",
  description: "Investing in Public Safety by Investing in You",
  api: "https://i2i.icjia-api.cloud",
  root: "https://i2i.icjia.dev",
  isTranslationEnabled: true,
  footerMenu: [
    {
      main: "Home",
      link: "/",
    },
    {
      main: "About",
      link: "/about",
    },
    {
      main: "Contact",
      link: "/contact",
    },
    {
      main: "Sandbox",
      link: "/sandbox",
    },

    {
      main: "Search",
      link: "/search",
    },
  ],

  navMenu: [
    {
      main: "Home",
      link: "/",
      nudgeLeft: "78px",
    },
    {
      main: "Sandbox",
      link: "/sandbox",
      nudgeLeft: "78px",
    },

    {
      main: "Dropdown",
      nudgeLeft: "57px",
      children: [
        {
          section: "Section 1",
        },
        {
          title: "About",
          link: "/about",
        },
        {
          title: "Contact",
          link: "/contact",
        },
        {
          title: "All Pages",
          link: "/page",
        },
        {
          title: "Sandbox",
          link: "/sandbox",
        },
        {
          divider: true,
        },
        {
          section: "Section 2",
        },
        {
          title: "Page 1",
          link: "/page/test-page-1",
        },
        {
          title: "Page 2",
          link: "/page/test-page-2",
        },
        {
          title: "Page 3",
          link: "/page/test-page-3",
        },
      ],
    },
  ],
});
