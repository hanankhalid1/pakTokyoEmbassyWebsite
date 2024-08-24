import React from "react";
import { useState } from "react";
import data from "@/util/blogData";
import dataJpn from "@/util/dataJpn";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

const HistoryComponent = () => {
  const { language } = useLanguage();
  const currentData = language === "ENG" ? data : dataJpn;
  return (
    <div>
     <div>
  {currentData.slice(56, 57).map((item, i) => (
    <div className="handpicked__item small-post" key={i}>
      <div className="handpicked__thumb tgImage__hover">
        <Link href= "/historicalPlaces">
          <img
            src={`/assets/img/${item.group}/${item.img}`}
            alt="img"
          />
        </Link>
      </div>
      <div className="handpicked__content">
        <ul className="tgbanner__content-meta list-wrap">
          <li className="category">
            <Link href= "/historicalPlaces">{item.category}</Link>
          </li>
          <li>
            <span className="by">By</span>{" "}
            <Link href= "/cities">{item.author}</Link>
          </li>
        </ul>
        <h4 className="title tgcommon__hover">
          <Link href= "/historicalPlaces">{item.title}</Link>
        </h4>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default HistoryComponent;
