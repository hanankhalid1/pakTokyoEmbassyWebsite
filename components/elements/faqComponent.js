import Link from "next/link";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

// Define FAQ data for both English and Japanese
const faqEng = [
  {
    id: 1,
    title: "FAQs pertaining to Consular Section",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "18 April 2023",
  },
];

const faqJpn = [
  {
    id: 1,
    title: "領事部門に関するよくある質問",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "パキスタン",
    author: "東京大使館",
    date: "2023年4月18日",
  },
];

const FaqComponent = () => {
  const { language } = useLanguage();
  const [currentData, setCurrentData] = useState(faqEng);

  useEffect(() => {
    console.log("Language changed:", language);

    if (language === "ENG") {
      console.log("Setting data to English");
      setCurrentData(faqEng);
    } else {
      console.log("Setting data to Japanese");
      setCurrentData(faqJpn);
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
                    {language === "ENG" ? "Consular Services" : "領事サービス"}
                  </span>
                  <h3 className="section__main-title">
                    {language === "ENG"
                      ? "Frequently Asked Questions(FAQs)"
                      : "よくある質問(FAQs)"}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {currentData.slice(0, 1).map((item, i) => (
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
                          href="https://www.pakistanembassytokyo.com/sites/default/files/FAQs%20pertaining%20to%20Consular%20Section%2018-Apr-2023.pdf"
                          target="_blank"
                        >
                          {item.category}
                        </Link>
                      </li>
                      <li>
                        <span className="by">By</span>{" "}
                        <Link
                          href="https://www.pakistanembassytokyo.com/sites/default/files/FAQs%20pertaining%20to%20Consular%20Section%2018-Apr-2023.pdf"
                          target="_blank"
                        >
                          {item.author}
                        </Link>
                      </li>
                    </ul>
                    <h4 className="title tgcommon__hover">
                      <Link
                        href="https://www.pakistanembassytokyo.com/sites/default/files/FAQs%20pertaining%20to%20Consular%20Section%2018-Apr-2023.pdf"
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

export default FaqComponent;
