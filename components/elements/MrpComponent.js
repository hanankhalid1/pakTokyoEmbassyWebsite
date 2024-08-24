import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const dataEng = {
  subTitle: "Consular Services",
  mainTitle: "MACHINE READABLE PASSPORTS (MRP)",
  paragraph: "Machine Readable Passports (MRP) are issued to Pakistani citizens for international travel. Applicants are required to submit their applications through the online portal. The MRP system ensures quick processing and enhanced security.",
  furtherInfoTitle: "For further information",
  furtherInfoLink: "Click here",
};

const dataJpn = {
  subTitle: "領事サービス",
  mainTitle: "機械読取式パスポート（MRP）",
  paragraph: "機械読取式パスポート（MRP）は、国際旅行のためにパキスタン市民に発行されます。申請者はオンラインポータルを通じて申請を提出する必要があります。MRPシステムは迅速な処理と高いセキュリティを確保します。",
  furtherInfoTitle: "詳細情報については",
  furtherInfoLink: "ここをクリック",
};

const MrpComponent = () => {
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
            <Link href="https://www.pakistanembassytokyo.com/content/mrp" target="_blank">
              {currentData.furtherInfoLink}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MrpComponent;
