import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const sectionTitleDataEng = {
  tourism: {
    subTitle: "Tourism",
    mainTitle: "Popular Tourism",
    moreText: "More Tourism Post"
  },
  // Add more sections here if needed
};

const sectionTitleDataJpn = {
  tourism: {
    subTitle: "観光",
    mainTitle: "人気の観光地",
    moreText: "さらに観光ポスト"
  },
  // Add more sections here if needed
};

const SectionTitle = ({ section }) => {
  const { language } = useLanguage();
  const currentText = language === "ENG" ? sectionTitleDataEng[section] : sectionTitleDataJpn[section];

  if (!currentText) {
    return null; // Return null if the section key is not found
  }

  return (
    <div className="section__title-wrap mb-40">
      <div className="row align-items-end">
        <div className="col-sm-6">
          <div className="section__title">
            <span className="section__sub-title">{currentText.subTitle}</span>
            <h3 className="section__main-title">{currentText.mainTitle}</h3>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="section__read-more text-start text-sm-end">
            <Link href={`/${section}`}>
              {currentText.moreText} <i className="far fa-long-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
