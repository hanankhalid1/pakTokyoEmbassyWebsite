import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const AmbassadorEng = [
  {
    id: 1,
    title: "Ambassador Raza Bashir Tarar, born in 1964, has served in key diplomatic roles including High Commissioner to Kenya and Canada, and is currently Pakistan's Ambassador to Japan since November 2022.",
    img: "razaTarar.jpg",
    group: "keyPerson",
    trending: true,
    category: "Pakistan",
    author: "Tokyo Japan",
    date: "November 22, 2023",
    readMore: "Read More"
  },
];

const AmbassadorJpn = [
  {
    id: 1,
    title: "ラザ・バシール・タラー大使は1964年生まれで、ケニアとカナダの高等弁務官を含む重要な外交役職を歴任し、2022年11月から現在は日本のパキスタン大使を務めています。",
    img: "razaTarar.jpg",
    group: "keyPerson",
    trending: true,
    category: "パキスタン",
    author: "東京 日本",
    date: "2023年11月22日",
    readMore: "続きを読む"
  },
];

export default function Ambassador() {
  const { language } = useLanguage();
  const currentData = language === "ENG" ? AmbassadorEng : AmbassadorJpn;

  return (
    <>
      <div className="section__title-wrap mb-40">
        <div className="row align-items-end">
          <div className="col-sm-6">
            <div className="section__title">
              <span className="section__sub-title">
                {language === "ENG" ? "About" : "について"}
              </span>
              <h3 className="section__main-title">
                {language === "ENG" ? "H.E Ambassador" : "大使閣下"}
              </h3>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="section__read-more text-start text-sm-end">
              <Link href="/about">
                {language === "ENG" ? "More About Ambassador" : "大使についてもっと見る"}{" "}
                <i className="far fa-long-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-container">
        {currentData.map((item) => (
          <div className="slider__item" key={item.id}>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider__content">
                  <ul
                    className="tgbanner__content-meta list-wrap"
                    data-animation-in="tg-fadeInUp"
                    data-delay-in=".2"
                  >
                    <li className="category">
                      <Link href="/blog">{item.category}</Link>
                    </li>
                    <li>
                      <span className="by">by</span>{" "}
                      <Link href="/blog">{item.author}</Link>
                    </li>
                    <li>{item.date}</li>
                  </ul>
                  <h2
                    className="title"
                    data-animation-in="tg-fadeInUp"
                    data-delay-in=".6"
                  >
                    {item.title}
                  </h2>
                  <div className="minimal__post-more text-center">
                    <Link href="/about" id="loadMore" className="btn">
                      <span className="text">{item.readMore}</span>{" "}
                      <i className="far fa-plus" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="slider__img-wrap">
                  <img
                    src={`/assets/img/keyPerson/${item.img}`}
                    className="main-img"
                    alt={item.title}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
