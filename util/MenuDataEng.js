const menuDataEn = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "About Us",
      link: "/about"
    },
    {
      title: "Consular Services",
      link: "#",
      subMenu: [
        { title: "Frequently Asked Questions(FAQs)", link: "/faq" },
        { title: "Digital Power Of Attorney", link: "/digitalAttorny" },
        { title: "Consular Services for Pakistanis", link: "/counsularServicePak" },
        { title: "Consular Services for Foreigners", link: "/counsularServiceFor" },
        { title: "Apply for E-Visa", link: "/eVisa" },
        { title: "Machine Readable Passport", link: "/mrp" },
        { title: "Documents for Export of Vehicle Under Gift Scheme", link: "/exportGift" }
      ]
    },
    {
      title: "Pak-Japan",
      link: "#",
      subMenu: [
        { title: "Bilateral Relationship", link: "/pakJapan" },
        { title: "Pakistan Japan Joint Statement 2011", link: "#" },
        { title: "List of Former Ambassadors", link: "/formerAmbassadors" },
        { title: "Pakistan and Japan Historical Pictures", link: "#" },
        { title: "Recipients of Awards", link: "#" },
        { title: "Books about Pakistan in Japanese", link: "#" }
      ]
    },
    {
      title: "Economy",
      link: "/economy"
    },
    {
      title: "Kashmir",
      link: "/kashmir"
    },
    {
      title: "More",
      link: "#",
      moreText: {
        more: "More",
       
      },
      subMenu: [
        {
          title: "Upcomming Events",
          link: "/upcomingEvent"
        },
        { title: "Downloads", link: "/downloads" },
        {
          title: "Human Resource",
          link: "/humanResource",
          subMenu: [
            { title: "JPN Immigration Control", link: "/immigrationControl" },
            { title: "TITP", link: "/titp"  },
            { title: "SSW",link: "/ssw"  }
          ]
        },
        {
          title: "Media Center",
          link: "/mediaCenter",
          subMenu: [
            { title: "News Alert", link: "/" },
            { title: "Newsletters", link: "/news" },
            { title: "Tourism", link: "/tourism" },
            { title: "Video Gallery", link: "#" }
          ]
        }
      ]
    }
  ];
  
  export default menuDataEn;
  