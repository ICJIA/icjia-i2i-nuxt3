export default defineAppConfig({
  title: "Institute to Innovate (i2i)",
  description: "Investing in Public Safety by Investing in You",
  api: "https://i2i.icjia-api.cloud",
  root: "https://i2i.icjia.dev",
  isTranslationEnabled: false,
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
      main: "Information & Resources",
      link: "/information-and-resources",
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
    {
      main: "Contact",
      link: "/contact",
    },
  ],
});
