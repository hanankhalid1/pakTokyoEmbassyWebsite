import React from "react";
import { useState } from "react";
import data from "@/util/blogData";
import dataJpn from "@/util/dataJpn";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

const NorthComponent = () => {
  const { language } = useLanguage();
  const currentData = language === "ENG" ? data : dataJpn;
  return (
    <div>
      <div>
        {currentData.slice(37, 38).map((item, i) => (
          <div className="handpicked__item big-post" key={i}>
            <div className="handpicked__thumb tgImage__hover">
              <Link href="/">
                <img src={`/assets/img/${item.group}/${item.img}`} alt="img" />
              </Link>
            </div>
            <div className="handpicked__content">
              <ul className="tgbanner__content-meta list-wrap">
                <li className="category">
                  <Link href="/">{item.category}</Link>
                </li>
                <li>
                  <span className="by">By</span>{" "}
                  <Link href="/">{item.author}</Link>
                </li>
                <li>{item.date}</li>
              </ul>
              <h2 className="title tgcommon__hover">
                <Link href="/north">{item.title}</Link>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NorthComponent;
