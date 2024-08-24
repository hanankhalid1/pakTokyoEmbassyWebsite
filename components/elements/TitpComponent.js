import Link from "next/link";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const titpEng = [
  {
    id: 1,
    title: "TITP Agreement (Pakistan & Japan)",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 2,
    title: "[Update] List of Job categories Operations",
    img: "gop.png",
    group: "links",
    trending: false,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 3,
    title: "List of Pakistani Sending Organizations under TITP",
    img: "gop.png",
    group: "links",
    trending: false,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
  {
    id: 4,
    title: "Selection Criteria for Nominating OEPs",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
];

const titpJpn = [
  {
    id: 1,
    title: "TITP協定（パキスタンと日本）",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 2,
    title: "[更新] 職種一覧（作業）",
    img: "gop.png",
    group: "links",
    trending: false,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 3,
    title: "TITP下のパキスタン送出機関の一覧",
    img: "gop.png",
    group: "links",
    trending: false,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
  {
    id: 4,
    title: "OEPを指名するための選定基準",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
];

const TitpComponent = () => {
  const { language } = useLanguage();
  const [currentData, setCurrentData] = useState(titpEng);

  useEffect(() => {
    console.log("Language changed:", language);

    if (language === "ENG") {
      console.log("Setting data to English");
      setCurrentData(titpEng);
    } else {
      console.log("Setting data to Japanese");
      setCurrentData(titpJpn);
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
                  <span className="section__sub-title">TITP</span>
                  <h3 className="section__main-title">
                    {language === "ENG"
                      ? "TITP Attachments"
                      : "TITP 添付ファイル"}
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
                    {item.id}
                  </div>
                  <div className="featured__content">
                    <ul className="tgbanner__content-meta list-wrap">
                      <li className="category">
                        <Link
                          href="https://www.pakistanembassytokyo.com/content/titp"
                          target="_blank"
                        >
                          {item.category}
                        </Link>
                      </li>
                      <li>
                        <span className="by">By</span>{" "}
                        <Link
                          href="https://www.pakistanembassytokyo.com/content/titp"
                          target="_blank"
                        >
                          {item.author}
                        </Link>
                      </li>
                    </ul>
                    <h4 className="title tgcommon__hover">
                      <Link
                        href="https://www.pakistanembassytokyo.com/content/titp"
                        target="_blank"
                      >
                        {item.title}
                      </Link>
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

export default TitpComponent;
