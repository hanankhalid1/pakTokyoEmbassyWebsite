import data from "@/util/blogData";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import dataJpn from "@/util/dataJpn";
import MoreTourismComponent from "./MoreTourismComponent";

export default function MinimalIsotope() {
  const { language } = useLanguage();
  const currentData = language === "ENG" ? data : dataJpn;
  const isotope = useRef();

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".minimal__post-wrapper", {
        itemSelector: ".minimal__post-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".minimal__post-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
  }, []);

  // Dynamic text for the "Load More" button
  const loadMoreText = language === "ENG" ? "Load More" : "もっと読み込む";

  return (
    <>
      <section className="minimal__post-area pt-80 pb-80">
        <div className="container">
          <div className="section__title-wrap mb-40">
            <div className="row align-items-end">
              <div className="col-sm-6">
                <div className="section__title">
                  <span className="section__sub-title">Tourism</span>
                  <h3 className="section__main-title">
                    {language === "ENG"
                      ? "Popular Tourism Places"
                      : "人気の観光地"}
                  </h3>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="section__read-more text-start text-sm-end">
                  <Link href="/tourism">
                    {language === "ENG"
                      ? "More Tourism Post"
                      : "もっと観光記事を見る"}{" "}
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="minimal__post-wrapper">
            {currentData.slice(37, 72).map((item, i) => (
              <div className="minimal__post-item grid-item" key={i}>
                <div className="minimal__post-thumb tgImage__hover">
                  <div className="minimal__post-tags">
                    <Link href="#">{item.category}</Link>
                  </div>
                  <Link href="#">
                    <img
                      src={`/assets/img/${item.group}/${item.img}`}
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="minimal__post-content">
                  <ul className="tgbanner__content-meta list-wrap">
                    <li>
                      <span className="by">By</span>{" "}
                      <Link href="#">{item.author}</Link>
                    </li>
                    <li>{item.date}</li>
                  </ul>
                  <h4 className="title tgcommon__hover">
                    <Link href="#">{item.title}</Link>
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div>
            <MoreTourismComponent />
          </div>
          <div className="minimal__post-more text-center">
            <Link href="#" id="loadMore" className="btn">
              <span className="text">{loadMoreText}</span>{" "}
              <i className="far fa-plus" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
