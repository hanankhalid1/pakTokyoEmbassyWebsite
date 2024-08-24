import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';


const VideoComponentHeading = () => {
  const { language } = useLanguage();

  return (
    <div className="section__title-wrap mb-40">
      <div className="row align-items-end">
        <div className="col-sm-6">
          <div className="section__title">
            <span className="section__sub-title">
              {language === "ENG" ? "Video" : "ビデオ"}
            </span>
            <h3 className="section__main-title">
              {language === "ENG" ? "Recent Video Post" : "最近のビデオ投稿"}
            </h3>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="section__read-more text-start text-sm-end">
            <Link href="/videos">
              {language === "ENG" ? "More Video Posts" : "もっと見る"} <i className="far fa-long-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponentHeading;
