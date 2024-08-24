import React from 'react';
import Link from 'next/link';
import ServiceDataEng from '@/util/ServiceEng';
import ServiceDataJapanese from '@/util/ServiceJpn';
import { useLanguage } from '@/contexts/LanguageContext';

// Data for the component content in English
const serviceTextEng = {
  services: "Services",
  topServices: "Top Services",
  moreServices: "More Services",
};

// Data for the component content in Japanese
const serviceTextJpn = {
  services: "サービス",
  topServices: "トップサービス",
  moreServices: "もっとサービス",
};

const ServiceComponent = () => {
  const { language } = useLanguage();
  const currentData = language === "ENG" ? ServiceDataEng : ServiceDataJapanese;
  const currentText = language === "ENG" ? serviceTextEng : serviceTextJpn;

  return (
    <div>
      <div className="section__title-wrap mb-40">
        <div className="row align-items-end">
          <div className="col-sm-6">
            <div className="section__title">
              <span className="section__sub-title">{currentText.services}</span>
              <h3 className="section__main-title">{currentText.topServices}</h3>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="section__read-more text-start text-sm-end">
              <Link href="/services">
                {currentText.moreServices} <i className="far fa-long-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="category__wrapper">
        {currentData.slice(0, 5).map((item, i) => (
          <div className="category__item" key={i}>
            <Link href={item.link || '/services'}>
              <img src={`/assets/img/Cservice/${item.img}`} alt={item.title} />
              <span className="cat-name">{item.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceComponent;
