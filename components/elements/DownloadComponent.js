import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import data from "@/util/blogData";
import dataJpn from "@/util/dataJpn";

const DownloadComponent = () => {
  const { language } = useLanguage();
  const currentData = language === "ENG" ? data : dataJpn;

  // Dynamic content data
  const dynamicContent = {
    forms: {
      subTitle: language === "ENG" ? "Download" : "ダウンロード",
      mainTitle: language === "ENG" ? "CONSULAR SERVICES FORMS" : "領事サービスフォーム",
    },
    opportunities: {
      subTitle: language === "ENG" ? "Download" : "ダウンロード",
      mainTitle: language === "ENG" ? "IT/Software Engineers related opportunities" : "IT/ソフトウェアエンジニア関連の機会",
    }
  };

  return (
    <div>
      <section className="featured-post-area section__hover-line pt-75">
        <div className="container">
          <div className="section__title-wrap mb-40">
            <div className="row align-items-end">
              <div className="col-sm-6">
                <div className="section__title">
                  <span className="section__sub-title">{dynamicContent.forms.subTitle}</span>
                  <h3 className="section__main-title">
                    {dynamicContent.forms.mainTitle}
                  </h3>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="section__read-more text-start text-sm-end">
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {currentData.slice(98, 108).map((item, i) => (
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
                  <span className="section__sub-title">{dynamicContent.opportunities.subTitle}</span>
                  <h3 className="section__main-title">
                    {dynamicContent.opportunities.mainTitle}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {currentData.slice(108, 109).map((item, i) => (
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
  );
};

export default DownloadComponent;
