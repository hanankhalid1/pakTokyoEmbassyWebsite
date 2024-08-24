import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import data from "@/util/blogData";
import dataJpn from "@/util/dataJpn";

const UpcommingComponent = () => {
  const { language } = useLanguage();
  const currentData = language === "ENG" ? data : dataJpn;

  // Dynamic content data
  const dynamicContent = {
    upcomingEvents: {
      subTitle: language === "ENG" ? "Upcoming Events" : "今後のイベント",
      mainTitle:
        language === "ENG"
          ? "4th International Textile Exhibition"
          : "第4回国際繊維展示会",
    },
    webinars: {
      subTitle: language === "ENG" ? "Webinars" : "ウェビナー",
      mainTitle:
        language === "ENG"
          ? "Webinars on the opportunities for Pakistani IT/Software Engineers in Japan"
          : "日本におけるパキスタンIT/ソフトウェアエンジニアの機会に関するウェビナー",
      paragraph:
        language === "ENG"
          ? "The Embassy of Pakistan in Japan is organizing a Webinar on IT related opportunities in Japan for Pakistani IT/Software engineers and Pakistani IT companies. The webinar will be held on Feb 08, 2023 at 1400 hours JST. Interested Pakistanis in Japan and Pakistani companies can register through the following link."
          : "在日パキスタン大使館は、日本におけるIT関連の機会について、パキスタンのIT/ソフトウェアエンジニアおよびIT企業のためのウェビナーを開催します。ウェビナーは2023年2月8日、JST午後2時に開催されます。興味のあるパキスタン人およびパキスタン企業は、以下のリンクから登録できます。",
    },
  };

  return (
    <>
      <section className="handpicked-post-area section__hover-line pt-75">
        <div className="container">
          <div className="section__title-wrap mb-40">
            <div className="row align-items-end">
              <div className="col-sm-6">
                <div className="section__title">
                  <span className="section__sub-title">
                    {dynamicContent.upcomingEvents.subTitle}
                  </span>
                  <h3 className="section__main-title">
                    {dynamicContent.upcomingEvents.mainTitle}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {currentData.slice(109, 110).map((item, i) => (
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
                        <Link
                          href="https://www.pakistanembassytokyo.com/sites/default/files/E-brochure%202023_0.pdf"
                          target="_blank"
                        >
                          {item.category}
                        </Link>
                      </li>
                      <li>
                        <span className="by">By</span>{" "}
                        <Link
                          href="https://www.pakistanembassytokyo.com/sites/default/files/E-brochure%202023_0.pdf"
                          target="_blank"
                        >
                          {item.author}
                        </Link>
                      </li>
                    </ul>
                    <h4 className="title tgcommon__hover">
                      <Link
                        href="https://www.pakistanembassytokyo.com/sites/default/files/E-brochure%202023_0.pdf"
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
      <section className="handpicked-post-area section__hover-line pt-75 pb-50">
        <div className="container">
          <div className="section__title-wrap mb-40">
            <div className="row align-items-end">
              <div className="col-sm-6">
                <div className="section__title">
                  <span className="section__sub-title">
                    {dynamicContent.webinars.subTitle}
                  </span>
                  <h3 className="section__main-title">
                    {dynamicContent.webinars.mainTitle}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <p className="responsive-paragraph">
            {dynamicContent.webinars.paragraph}
          </p>
        </div>
      </section>
    </>
  );
};

export default UpcommingComponent;
