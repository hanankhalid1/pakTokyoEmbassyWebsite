import React from 'react';
import data from '@/util/blogData';
import dataJpn from '@/util/dataJpn';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

// Text data for English
const textDataEng = {
  subTitle: "Links",
  mainTitle: "Important Links",
  moreText: "More Important Links"
};

// Text data for Japanese
const textDataJpn = {
  subTitle: "リンク",
  mainTitle: "重要なリンク",
  moreText: "さらに重要なリンク"
};

const ShowLinks = () => {
  const { language } = useLanguage();
  const currentData = language === "ENG" ? data : dataJpn;
  const currentText = language === "ENG" ? textDataEng : textDataJpn;

  return (
    <div>
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
              <Link href="/impLinks">
                {currentText.moreText}{" "}
                <i className="far fa-long-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {currentData.slice(4, 10).map((item, i) => (
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
  );
};

export default ShowLinks;
