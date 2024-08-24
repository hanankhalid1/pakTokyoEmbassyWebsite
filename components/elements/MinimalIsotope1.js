import data from "@/util/blogData";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef } from "react";
import dataJpn from "@/util/dataJpn";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MinimalIsotope1() {
  const { language } = useLanguage();
  const currentData = language === "ENG" ? data : dataJpn;
  const isotope = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only run the Isotope initialization in the browser
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
    }
  }, []);
  const loadMoreText = language === "ENG" ? "Load More" : "もっと読み込む";

  return (
    <>
      <section className="minimal__post-area pt-80 pb-80">
        <div className="container">
          <div className="minimal__post-wrapper">
            {currentData.slice(37, 44).map((item, i) => (
              <div className="minimal__post-item grid-item" key={i}>
                <div className="minimal__post-thumb tgImage__hover">
                  <div className="minimal__post-tags">
                    <Link href="#">{item.category}</Link>
                  </div>
                  <Link href="/blog/1">
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
                      <Link href="/blog">{item.author}</Link>
                    </li>
                    <li>{item.date}</li>
                  </ul>
                  <h4 className="title tgcommon__hover">
                    <Link href={`/blog/${item.id}`}>{item.title}</Link>
                  </h4>
                </div>
              </div>
            ))}
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
