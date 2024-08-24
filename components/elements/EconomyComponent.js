import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

// Define the data arrays locally
const pakistanEconomyDataEng = [
  {
    id: 1,
    title: "Finance Ministry",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 2,
    title: "State Bank of Pakistan",
    img: "gop.png",
    group: "links",
    trending: false,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 3,
    title: "Trade Development Authority of Pakistan",
    img: "gop.png",
    group: "links",
    trending: false,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 4,
    title: "Statistics Division",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 5,
    title: "Board of Investment",
    img: "gop.png",
    group: "links",
    trending: false,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 6,
    title: "SME Development Authority",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 7,
    title: "Securities and Exchange Commission",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 8,
    title: "Ministry of Commerce",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 9,
    title: "Trade Statistics of Pakistan",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 10,
    title: "Export Processing Zones in Pakistan",
    img: "gop.png",
    group: "links",
    trending: false,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 11,
    title: "Agriculture",
    img: "gop.png",
    group: "links",
    trending: false,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 12,
    title: "Ministry of Finance, Japan",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "Japan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 13,
    title: "Japanese External Trade Organization, JETRO",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "Japan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 14,
    title: "Japan Customs",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "Japan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 15,
    title: "Ministry of Economy, Trade, and Industry Japan",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "Japan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
];

const pakistanEconomyDataJpn = [
  {
    id: 1,
    title: "財務省",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 2,
    title: "パキスタン国立銀行",
    img: "gop.png",
    group: "links",
    trending: false,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 3,
    title: "パキスタン貿易発展局",
    img: "gop.png",
    group: "links",
    trending: false,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 4,
    title: "統計局",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 5,
    title: "投資委員会",
    img: "gop.png",
    group: "links",
    trending: false,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 6,
    title: "中小企業振興機関",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 7,
    title: "証券取引委員会",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 8,
    title: "商業省",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 9,
    title: "パキスタン貿易統計",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 10,
    title: "パキスタン輸出加工区",
    img: "gop.png",
    group: "links",
    trending: false,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 11,
    title: "農業",
    img: "gop.png",
    group: "links",
    trending: false,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 12,
    title: "財務省（日本）",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "日本",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 13,
    title: "日本貿易振興機構（JETRO）",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "日本",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 14,
    title: "日本税関",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "日本",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 15,
    title: "経済産業省（日本）",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "日本",
    author: "東京大使館",
    date: "2022年4月25日",
  },
];

const EconomyComponent = () => {
    const { language } = useLanguage();
  const [currentData, setCurrentData] = useState(pakistanEconomyDataEng);

  useEffect(() => {
    console.log("Language changed:", language);

    if (language === "ENG") {
      console.log("Setting data to English");
      setCurrentData(pakistanEconomyDataEng);
    } else {
      console.log("Setting data to Japanese");
      setCurrentData(pakistanEconomyDataJpn);
    }
  }, [language]);

  useEffect(() => {
    console.log("Current data:", currentData);
  },[currentData]);
  return (
    <div>
            <section className="featured-post-area section__hover-line pt-75">
                <div className="container">
                    <div className="section__title-wrap mb-40">
                        <div className="row align-items-end">
                            <div className="col-sm-6">
                                <div className="section__title">
                                    <span className="section__sub-title">
                                        {language === "ENG" ? "Economy" : "経済"}
                                    </span>
                                    <h3 className="section__main-title">
                                        {language === "ENG" 
                                            ? "Links of Economic Sectors of Pakistan" 
                                            : "パキスタンの経済部門のリンク"}
                                    </h3>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="section__read-more text-start text-sm-end">
                                    <Link href="/economy">
                                        {language === "ENG"
                                            ? "More Links"
                                            : "もっと見る"} 
                                        <i className="far fa-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {currentData.slice(0, 11).map((item, i) => (
                            <div className="col-lg-4 col-sm-6" key={i}>
                                <div className="featured__post">
                                    <div
                                        className="featured__thumb"
                                        style={{
                                            backgroundImage: `url(/assets/img/blog/${item.img})`,
                                        }}
                                    >
                                        0{item.id}
                                    </div>
                                    <div className="featured__content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category">
                                                <Link href="/impLinks">{item.category}</Link>
                                            </li>
                                            <li>
                                                <span className="by">By</span>{" "}
                                                <Link href="/impLinks">{item.author}</Link>
                                            </li>
                                        </ul>
                                        <h4 className="title tgcommon__hover">
                                            <Link href={`/blog/${item.id}`}>{item.title}</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="featured-post-area section__hover-line pt-75">
                <div className="container">
                    <div className="section__title-wrap mb-40">
                        <div className="row align-items-end">
                            <div className="col-sm-6">
                                <div className="section__title">
                                    <span className="section__sub-title">
                                        {language === "ENG" ? "Economy" : "経済"}
                                    </span>
                                    <h3 className="section__main-title">
                                        {language === "ENG" 
                                            ? "Links of Economic Sectors of Japan" 
                                            : "日本の経済部門のリンク"}
                                    </h3>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="section__read-more text-start text-sm-end">
                                    <Link href="/economy">
                                        {language === "ENG"
                                            ? "More Links of Economic Sectors of Japan"
                                            : "日本の経済部門のリンクをもっと見る"} 
                                        <i className="far fa-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {currentData.slice(11).map((item, i) => (
                            <div className="col-lg-4 col-sm-6" key={i}>
                                <div className="featured__post">
                                    <div
                                        className="featured__thumb"
                                        style={{
                                            backgroundImage: `url(/assets/img/blog/${item.img})`,
                                        }}
                                    >
                                        0{item.id}
                                    </div>
                                    <div className="featured__content">
                                        <ul className="tgbanner__content-meta list-wrap">
                                            <li className="category">
                                                <Link href="/impLinks">{item.category}</Link>
                                            </li>
                                            <li>
                                                <span className="by">By</span>{" "}
                                                <Link href="/impLinks">{item.author}</Link>
                                            </li>
                                        </ul>
                                        <h4 className="title tgcommon__hover">
                                            <Link href={`/blog/${item.id}`}>{item.title}</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
  )
}

export default EconomyComponent
