const menuDataJp = [
    {
      title: "ホーム",
      link: "/"
    },
    {
      title: "私たちについて",
      link: "/about"
    },
    {
      title: "領事サービス",
      link: "#",
      subMenu: [
        { title: "よくある質問（FAQs）", link: "/faq" },
        { title: "デジタル委任状", link: "/digitalAttorny" },
        { title: "パキスタン人向け領事サービス", link: "/counsularServicePak" },
        { title: "外国人向け領事サービス", link:  "/counsularServiceFor" },
        { title: "E-ビザの申請", link: "/eVisa" },
        { title: "機械読み取りパスポート", link: "/mrp" },
        { title: "贈与制度による車両輸出に必要な書類", link: "/exportGift" }
      ]
    },
    {
      title: "パキスタン-日本",
      link: "/pakJapan",
      subMenu: [
        { title: "二国間関係", link: "/pakJapan" },
        { title: "パキスタン・日本共同声明 2011", link: "#" },
        { title: "元大使の一覧", link: "/formerAmbassadors" },
        { title: "パキスタンと日本の歴史的写真", link: "#" },
        { title: "受賞者", link: "/pakJapan" },
        { title: "日本語で書かれたパキスタンに関する書籍", link: "#" }
      ]
    },
    {
      title: "経済",
      link: "/economy"
    },
    {
      title: "カシミール",
      link: "/kashmir"
    },
    {
      title: "もっと見る",
      link: "#",
      moreText: {
        more: "もっと見る",
      },
      subMenu: [
        {
          title: "今後のイベント",
          link: "/upcomingEvent",
        },
        { title: "ダウンロード", link: "/downloads" },
        {
          title: "人事",
          link: "/humanResource",
          subMenu: [
            { title: "日本の入国管理", link: "/immigrationControl" },
            { title: "TITP", link: "/titp" },
            { title: "SSW", link: "/ssw" }
          ]
        },
        {
          title: "メディアセンター",
          link: "/mediaCenter",
          subMenu: [
            { title: "ニュースアラート", link: "/" },
            { title: "ニュースレター", link: "/news" },
            { title: "観光", link: "/tourism" },
            { title: "ビデオギャラリー", link: "#" }
          ]
        }
      ]
    }
  ];
  
  export default menuDataJp;
  