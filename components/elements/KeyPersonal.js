import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { peopleEng } from '@/util/keyPersonalData';
import { peopleJpn } from '@/util/keyPerosnalJpn';

const KeyPersonal = () => {
  const { language } = useLanguage();
  const currentData = language === "ENG" ? peopleEng : peopleJpn;

  // Define dynamic titles for different languages
  const sectionSubTitle = language === "ENG" ? "Key Personnel" : "主要人物";
  const sectionMainTitle = language === "ENG" ? "Key Personnel" : "主要人物";

  return (
    <section className="slider__area fix">
      <div className="container">
        <div className="section__title-wrap mb-40">
          <div className="row align-items-end">
            <div className="col-sm-6">
              <div className="section__title">
                <span className="section__sub-title">{sectionSubTitle}</span>
                <h3 className="section__main-title">{sectionMainTitle}</h3>
              </div>
            </div>
            <div className="col-sm-6">
              {/* Optional: You can add additional content or a "read more" link here */}
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
                <p><span className="telephone">{language === "ENG" ? "Tel:" : "電話:"}</span>{person.tel}</p>
                <p><span className="telephone">{language === "ENG" ? "Fax:" : "ファックス:"}</span>{person.fax}</p>
              </div>
              <div className="tgAbout-social">
                {person.social.map((social, i) => (
                  <Link href={social.url} key={i} aria-label={social.label}>
                    <i className={social.iconClass} />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPersonal;
