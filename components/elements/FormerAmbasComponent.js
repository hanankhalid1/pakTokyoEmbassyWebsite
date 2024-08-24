import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AmbassdorsEng } from '@/util/ambasDataEng';
import { AmbassdorsJpn } from '@/util/ambasDataJpn';

export const titles = {
    ENG: {
      subtitle: "Former Ambassadors",
      mainTitle: "Former Ambassadors"
    },
    JPN: {
      subtitle: "元大使",
      mainTitle: "元大使"
    }
  };
  

const FormerAmbasComponent = () => {
  const { language } = useLanguage();
  const currentData = language === "ENG" ? AmbassdorsEng : AmbassdorsJpn;
  const currentTitles = titles[language];

  return (
    <section className="slider__area fix">
      <div className="container">
        <div className="section__title-wrap mb-40">
          <div className="row align-items-end">
            <div className="col-sm-6">
              <div className="section__title">
                <span className="section__sub-title">{currentTitles.subtitle}</span>
                <h3 className="section__main-title">{currentTitles.mainTitle}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="tgAbout-container">
          {currentData.map((person, index) => (
            <div className="tgAbout-me" key={index}>
              <div className="tgAbout-thumb">
                <img src={person.image} alt={person.name} />
              </div>
              <div className="tgAbout-info">
                <p className="intro">
                  <span>{person.name}</span>
                </p>
                <span className="designation">{person.designation}</span>
                <p><span className="telephone">From:</span> {person.from}</p>
                <p><span className="telephone">To:</span> {person.to}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormerAmbasComponent;
