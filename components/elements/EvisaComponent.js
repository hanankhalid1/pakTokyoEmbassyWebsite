import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const dataEng = {
  subTitle: "Consular Services",
  mainTitle: "Apply for E-Visa",
  paragraph: "As per the instructions of Government of Pakistan, from 1st January, 2021 ALL VISA APPLICATIONS are to be submitted via Pakistan Online Visa System. All visa applications are therefore advised to please submit visa application through online visa portal.",
  furtherInfoTitle: "For further information",
  furtherInfoLink: "Click here...",
};

const dataJpn = {
  subTitle: "領事サービス",
  mainTitle: "Eビザの申請",
  paragraph: "パキスタン政府の指示に従い、2021年1月1日からすべてのビザ申請はパキスタンオンラインビザシステムを通じて提出する必要があります。すべてのビザ申請は、オンラインビザポータルを通じてビザ申請を提出するようお願いします。",
  furtherInfoTitle: "詳細情報については",
  furtherInfoLink: "ここをクリック...",
};

const EvisaComponent = () => {
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
            <Link href="https://www.pakistanembassytokyo.com/content/apply-e-visa" target="_blank">
              {currentData.furtherInfoLink}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EvisaComponent;
