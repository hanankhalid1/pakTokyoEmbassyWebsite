import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const dataEng = {
  subTitle: "Consular Services",
  mainTitle: "Consular Services For Foreigners",
  paragraph: "Information Related To Consular Services For Foreigners",
  furtherInfoTitle: "For further information",
  furtherInfoLink: "Click here",
};

const dataJpn = {
  subTitle: "領事サービス",
  mainTitle: "外国人向け領事サービス",
  paragraph: "外国人向け領事サービスに関する情報",
  furtherInfoTitle: "詳細情報については",
  furtherInfoLink: "ここをクリック",
};

const CserviceForeignersComponent = () => {
  const { language } = useLanguage();
  const [currentData, setCurrentData] = useState(dataEng);

  useEffect(() => {
    if (language === "ENG") {
      setCurrentData(dataEng);
    } else {
      setCurrentData(dataJpn);
    }
  }, [language]);

  return (
    <div>
      <section className="handpicked-post-area section__hover-line pt-75 pb-50">
        <div className="container">
          <div className="section__title-wrap mb-40">
            <div className="row align-items-end">
              <div className="col-sm-6">
                <div className="section__title">
                  <span className="section__sub-title">{currentData.subTitle}</span>
                  <h3 className="section__main-title">{currentData.mainTitle}</h3>
                </div>
              </div>
            </div>
          </div>
          <p className="responsive-paragraph">{currentData.paragraph}</p>
          <div>
            <p>{currentData.furtherInfoTitle}</p>
            <Link href="https://www.pakistanembassytokyo.com/content/consular-services-foreigners" target="_blank">
              {currentData.furtherInfoLink}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CserviceForeignersComponent;
