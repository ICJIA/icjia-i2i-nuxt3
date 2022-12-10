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
      main: "Information & Resources",
      link: "/information-and-resources",
    },

    {
      main: "Contact",
      link: "/contact",
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
      main: "About",
      link: "/about",
    },
    {
      main: "Information & Resources",
      link: "/information-and-resources",
    },
  ],
});
