import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const dataEng = {
  subTitle: "Consular Services",
  mainTitle: "Power of Attorney Attestation",
  paragraph: "NOW THERE IS NO NEED TO COME TO THE EMBASSY FOR ATTESTATION OF POWER OF ATTORNEY!!",
  submissionGuidelinesTitle: "For application submission guidelines, please visit",
  submissionGuidelinesLink: "Application Submission Guidelines..",
  furtherInfoTitle: "For further information & submission of application please visit",
  furtherInfoLink: "For Further Information Link..",
};

const dataJpn = {
  subTitle: "領事サービス",
  mainTitle: "委任状の認証",
  paragraph: "委任状の認証のために大使館に来る必要はありません!!",
  submissionGuidelinesTitle: "申請ガイドラインについては、こちらをご覧ください",
  submissionGuidelinesLink: "申請ガイドラインはこちら..",
  furtherInfoTitle: "詳細情報および申請の提出については、こちらをご覧ください",
  furtherInfoLink: "詳細情報リンク..",
};

const DigitAttorComponent = () => {
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
            <p>{currentData.submissionGuidelinesTitle}</p>
            <Link href="https://mofa.gov.pk/58925-2/" target="_blank">
              {currentData.submissionGuidelinesLink}
            </Link>
          </div>
          <div>
            <p>{currentData.furtherInfoTitle}</p>
            <Link href="https://poa.nadra.gov.pk/" target="_blank">
              {currentData.furtherInfoLink}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitAttorComponent;
