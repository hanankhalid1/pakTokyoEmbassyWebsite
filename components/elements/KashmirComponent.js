import React from "react";
import Link from "next/link";
import PopularSlider2 from "../slider/PopularSlider";
import { useLanguage } from "@/contexts/LanguageContext";
const dataEng = [
  {
    id: "1",
    group: "kashmir",
    img: "kashmir.jpg",
    category: "Kashmir",
    author: "Pakistan Embassy",
    title: "An event was organized by Embassy of Pakistan Tokyo to observe 27th October as Kashmir Black Day.",
    date: "nov 21, 2022",
  },
  // Add more items as needed
];

const dataJpn = [
  {
    id: "1",
    group: "kashmir",
    img: "kashmir.jpg",
    category: "カシミール",
    author: "パキスタン大使館",
    title: "パキスタン大使館東京で10月27日をカシミールブラックデーとして観察するイベントが開催されました。",
    date: "2022年11月21日",
  },
  // Add more items as needed
];

const KashmirComponent = () => {
  const { language } = useLanguage();
  const currentData = language === "ENG" ? dataEng : dataJpn;

  return (
    <div>
      <section className="tgbanner__area-five pt-80 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tgbanner__five-item big-post">
                <div className="tgbanner__five-thumb tgImage__hover">
                  <Link href="/" className="tags">
                    {language === "ENG" ? "Kashmir" : "カシミール"}
                  </Link>
                  <Link href="/">
                    <img src="/assets/img/kashmir/kashmir.jpg" alt="img" />
                  </Link>
                </div>
                <div className="tgbanner__five-content">
                  <ul className="tgbanner__content-meta list-wrap">
                    <li>
                      <span className="by">{language === "ENG" ? "By" : "によって"}</span>{" "}
                      <Link href="/">{language === "ENG" ? "Pakistan Embassy" : "パキスタン大使館"}</Link>
                    </li>
                    <li>nov 21, 2022</li>
                  </ul>
                  <h2 className="title tgcommon__hover">
                    <Link href="https://www.pakistanembassytokyo.com/content/event-was-organized-embassy-pakistan-tokyo-observe-27th-october-kashmir-black-day-0">
                      {language === "ENG"
                        ? "An event was organized by Embassy of Pakistan Tokyo to observe 27th October as Kashmir Black Day."
                        : "パキスタン大使館東京で10月27日をカシミールブラックデーとして観察するイベントが開催されました。"}
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-lg-block gx-30">
              <div className="tgbanner__five-item small-post">
                <div className="tgbanner__five-thumb tgImage__hover">
                  <Link href="/" className="tags">
                    {language === "ENG" ? "Kashmir" : "カシミール"}
                  </Link>
                  <Link href="/">
                    <img src="/assets/img/kashmir/kashmir3.jpg" alt="img" />
                  </Link>
                </div>
                <div className="tgbanner__five-content">
                  <ul className="tgbanner__content-meta list-wrap">
                    <li>
                      <span className="by">{language === "ENG" ? "By" : "によって"}</span>{" "}
                      <Link href="/">{language === "ENG" ? "Pakistan Embassy" : "パキスタン大使館"}</Link>
                    </li>
                    <li>nov 21, 2022</li>
                  </ul>
                  <h2 className="title tgcommon__hover">
                    <Link href="https://www.pakistanembassytokyo.com/content/kashmir-black-day-observed-embassy-pakistan-tokyo">
                      {language === "ENG"
                        ? "Kashmir Black Day observed at Embassy of Pakistan, Tokyo | Pakistan Embassy Tokyo Japan"
                        : "パキスタン大使館、東京でカシミールブラックデーを観察しました | パキスタン大使館東京日本"}
                    </Link>
                  </h2>
                </div>
              </div>
              <div className="tgbanner__five-item small-post">
                <div className="tgbanner__five-thumb tgImage__hover">
                  <Link href="/blog" className="tags">
                    {language === "ENG" ? "Kashmir" : "カシミール"}
                  </Link>
                  <Link href="/kashmir">
                    <img src="/assets/img/kashmir/kashmir4.jpg" alt="img" />
                  </Link>
                </div>
                <div className="tgbanner__five-content">
                  <ul className="tgbanner__content-meta list-wrap">
                    <li>
                      <span className="by">{language === "ENG" ? "By" : "によって"}</span>{" "}
                      <Link href="/blog">{language === "ENG" ? "Pakistan Embassy" : "パキスタン大使館"}</Link>
                    </li>
                    <li>nov 21, 2022</li>
                  </ul>
                  <h2 className="title tgcommon__hover">
                    <Link href="/kashmir">
                      {language === "ENG"
                        ? "An event was organized by Embassy of Pakistan, Tokyo to observe 27th October as Kashmir Black Day."
                        : "パキスタン大使館、東京で10月27日をカシミールブラックデーとして観察するイベントが開催されました。"}
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular__post-area lifestyle__popular-area white-bg section__hover-line pt-75 pb-75">
        <div className="container">
          <div className="trending__slider">
            <div className="swiper-container popular-active">
              <PopularSlider2 />
            </div>
          </div>
        </div>
      </section>
      <section className="latest-post-area pt-80 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-8">
              <div className="section__title-wrap mb-40">
                <div className="row align-items-end">
                  <div className="col-sm-6">
                    <div className="section__title">
                      <span className="section__sub-title">
                        {language === "ENG" ? "Kashmir" : "カシミール"}
                      </span>
                      <h3 className="section__main-title">
                        {language === "ENG" ? "About Kashmir" : "カシミールについて"}
                      </h3>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="section__read-more text-start text-sm-end">
                      <Link href="/kashmir">
                        {language === "ENG" ? "More About Kashmir" : "カシミールについてもっと"}{" "}
                        <i className="far fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="latest__post-wrap">
                {currentData.slice(0, 3).map((item, i) => (
                  <div className="latest__post-item" key={i}>
                    <div className="latest__post-thumb tgImage__hover">
                      <Link href={`/blog/${item.id}`}>
                        <img
                          src={`/assets/img/${item.group}/${item.img}`}
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="latest__post-content">
                      <ul className="tgbanner__content-meta list-wrap">
                        <li className="category">
                          <Link href="/blog">{item.category}</Link>
                        </li>
                        <li>
                          <span className="by">
                            {language === "ENG" ? "By" : "によって"}
                          </span>{" "}
                          <Link href="/blog">{item.author}</Link>
                        </li>
                        <li>nov 22, 2022</li>
                      </ul>
                      <h3 className="title tgcommon__hover">
                        <Link href={`/blog/${item.id}`}>{item.title}</Link>
                      </h3>
                      <p>
                        {language === "ENG"
                          ? "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail."
                          : "構造化されたグリップテープ、見えないモールドカップ、しっかりとしたホールド力、強力なパワーメッシュフロントライナー、スポーツディテール。"}
                      </p>
                      <ul className="post__activity list-wrap">
                        <li>
                          <i className="fal fa-signal" /> 1.5k
                        </li>
                        <li>
                          <Link href={`/blog/${item.id}`}>
                            <i className="fal fa-comment-dots" /> 150
                          </Link>
                        </li>
                        <li>
                          <i className="fal fa-share-alt" /> 32
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="latest__post-more text-center">
                <Link href="#" id="loadMore" className="btn">
                  <span className="text">
                    {language === "ENG" ? "Load More" : "もっと読み込む"}
                  </span>{" "}
                  <i className="far fa-plus" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              {/* <BlogSidebar /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KashmirComponent;
