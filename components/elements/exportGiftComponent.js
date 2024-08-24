import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const exportDocEng = [
  {
    id: 1,
    title: "Documents for Export of Vehicle Under Gift Scheme",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "Pakistan",
    author: "Tokyo Embassy",
    date: "25 April 2022",
  },
];

const exportDocJpn = [
  {
    id: 1,
    title: "ギフトスキームによる車両輸出のための書類",
    img: "gop.png",
    group: "links",
    trending: true,
    category: "パキスタン",
    author: "東京大使館",
    date: "2022年4月25日",
  },
];

const headingsEng = {
  subTitle: "Consular Services",
  mainTitle: "Documents for Export of Vehicle Under Gift Scheme",
};

const headingsJpn = {
  subTitle: "領事サービス",
  mainTitle: "ギフトスキームによる車両輸出のための書類",
};

const ExportGiftComponent = () => {
  const { language } = useLanguage();
  const [currentData, setCurrentData] = useState(exportDocEng);
  const [headings, setHeadings] = useState(headingsEng);

  useEffect(() => {
    if (language === "ENG") {
      setCurrentData(exportDocEng);
      setHeadings(headingsEng);
    } else {
      setCurrentData(exportDocJpn);
      setHeadings(headingsJpn);
    }
  }, [language]);

  return (
    <div>
      <section className="featured-post-area section__hover-line pt-75">
        <div className="container">
          <div className="section__title-wrap mb-40">
            <div className="row align-items-end">
              <div className="col-sm-6">
                <div className="section__title">
                  <span className="section__sub-title">{headings.subTitle}</span>
                  <h3 className="section__main-title">{headings.mainTitle}</h3>
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
                          href="https://www.pakistanembassytokyo.com/sites/default/files/Gift%20Undertaking%20Documents_0.pdf"
                          target="_blank"
                        >
                          {item.category}
                        </Link>
                      </li>
                      <li>
                        <span className="by">By</span>{" "}
                        <Link
                          href="https://www.pakistanembassytokyo.com/sites/default/files/Gift%20Undertaking%20Documents_0.pdf"
                          target="_blank"
                        >
                          {item.author}
                        </Link>
                      </li>
                    </ul>
                    <h4 className="title tgcommon__hover">
                      <Link
                        href="https://www.pakistanembassytokyo.com/sites/default/files/Gift%20Undertaking%20Documents_0.pdf"
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

export default ExportGiftComponent;
