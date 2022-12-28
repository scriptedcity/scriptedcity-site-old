export default defineNuxtPlugin(() => {
  const constants = {
    title: "Scripted City Revised",
    meta: {
      type: "website",
      title: "Scripted City Revised",
      description: "millstones Web Site",
      url: "http://scriptedcity.aroundhalf.info",
      siteName: "Scripted City Revised",
      image: "http://scriptedcity.aroundhalf.info/avatar/millstones.jpg",
      twitterCard: "summary",
      twitterSite: "@millstones",
    },
    categories: ["works", "discography", "songs", "texts"],
    copyright: "2022 millstones",
  };
  return { provide: constants };
});
