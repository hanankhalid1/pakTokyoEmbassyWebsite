import Link from "next/link";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

// Define the data arrays locally
const immigrationDataEng = [
  {
    id: 1,
    title: "Contents",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 2,
    title: "PartⅠ. Immigration Control and Residency Management in Recent Years",
    img: "gop.png",
    group: "links",
    trending: false,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 3,
    title: "PartⅡ. Major Policies Related to Immigration Control and Residency Management Administration",
    img: "gop.png",
    group: "links",
    trending: false,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 4,
    title: "Data Section",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
];

const immigrationDataJpn = [
  {
    id: 1,
    title: "目次",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 2,
    title: "第Ⅰ部. 最近の入国管理と居住管理",
    img: "gop.png",
    group: "links",
    trending: false,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 3,
    title: "第Ⅱ部. 入国管理と居住管理に関する主要政策",
    img: "gop.png",
    group: "links",
    trending: false,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 4,
    title: "データセクション",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
];

const ImmigrationControlComponent = () => {
  const { language } = useLanguage();
  const [currentData, setCurrentData] = useState(immigrationDataEng);

  useEffect(() => {
    console.log("Language changed:", language);

    if (language === "ENG") {
      console.log("Setting data to English");
      setCurrentData(immigrationDataEng);
    } else {
      console.log("Setting data to Japanese");
      setCurrentData(immigrationDataJpn);
    }
  }, [language]);

  useEffect(() => {
    console.log("Current data:", currentData);
  }, [currentData]);

  return (
    <div>
      <section className="featured-post-area section__hover-line pt-75">
        <div className="container">
          <div className="section__title-wrap mb-40">
            <div className="row align-items-end">
              <div className="col-sm-6">
                <div className="section__title">
                  <span className="section__sub-title">
                    {language === "ENG" ? "Japan Immigration Control" : "日本の入国管理"}
                  </span>
                  <h3 className="section__main-title">
                    {language === "ENG" ? "Information about Japanese Immigration Control" : "日本の入国管理に関する情報"}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {currentData.slice(0, 4).map((item, i) => (
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
                        <Link href= "https://www.pakistanembassytokyo.com/content/information-about-japanese-immigration-control" target="_blank">{item.category}</Link>
                      </li>
                      <li>
                        <span className="by">By</span>{" "}
                        <Link href= "https://www.pakistanembassytokyo.com/content/information-about-japanese-immigration-control" target="_blank">{item.author}</Link>
                      </li>
                    </ul>
                    <h4 className="title tgcommon__hover">
                      <Link href= "https://www.pakistanembassytokyo.com/content/information-about-japanese-immigration-control" target="_blank">{item.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImmigrationControlComponent;
