import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

// Full data for English and Japanese
const TourismEng = [
  {
    title: "Pakistan Radio",
    link: "https://radio.gov.pk/live-streaming",
    image: "/assets/img/tourism/pakRadio.png",
    category: "Pakistan Radio",
  },
  {
    title: "Pakistan Coke Studio",
    link: "https://season15.cokestudio.com.pk/?gad_source=1&gclid=CjwKCAjwzIK1BhAuEiwAHQmU3kFSkXFxp7uYyo4Q4v89s254x5NhCQMlZLKwx7x7oiNkjTHuS9e12xoCg5MQAvD_BwE",
    image: "/assets/img/tourism/cokeStudio.png",
    category: "Coke Studio",
  },
  {
    title: "Pakistan Music",
    link: "/tourism",
    image: "/assets/img/tourism/pakMusic.png",
    category: "Pakistan Music",
  },
  {
    title: "Pakistan Video Gallery",
    link: "/tourism",
    image: "/assets/img/tourism/videoGallery.png",
    category: "Video Gallery",
  },
  {
    title: "Beautiful Pakistan",
    link: "/tourism",
    image: "/assets/img/tourism/ptdc.png",
    category: "Beautiful Pakistan",
  },
];

const TourismJpn = [
  {
    title: "パキスタンラジオ",
    link: "https://radio.gov.pk/live-streaming",
    image: "/assets/img/tourism/pakRadio.png",
    category: "パキスタンラジオ",
  },
  {
    title: "パキスタンコークスタジオ",
    link: "https://season15.cokestudio.com.pk/?gad_source=1&gclid=CjwKCAjwzIK1BhAuEiwAHQmU3kFSkXFxp7uYyo4Q4v89s254x5NhCQMlZLKwx7x7oiNkjTHuS9e12xoCg5MQAvD_BwE",
    image: "/assets/img/tourism/cokeStudio.png",
    category: "コークスタジオ",
  },
  {
    title: "パキスタン音楽",
    link: "/tourism",
    image: "/assets/img/tourism/pakMusic.png",
    category: "パキスタン音楽",
  },
  {
    title: "パキスタン動画ギャラリー",
    link: "/tourism",
    image: "/assets/img/tourism/videoGallery.png",
    category: "動画ギャラリー",
  },
  {
    title: "美しいパキスタン",
    link: "/tourism",
    image: "/assets/img/tourism/ptdc.png",
    category: "美しいパキスタン",
  },
];

const NewTourismComponent = () => {
  const { language } = useLanguage();
  const currentData = language === "ENG" ? TourismEng : TourismJpn;

  return (
    <div>
      <div className="section__title-wrap mb-40">
        <div className="row align-items-end">
          <div className="col-sm-6">
            <div className="section__title">
              <span className="section__sub-title">Tourism</span>
              <h3 className="section__main-title">
                {language === "ENG" ? "Tourism Links" : "観光リンク"}
              </h3>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="section__read-more text-start text-sm-end">
              <Link href="/tourism">
                {language === "ENG"
                  ? "More About Tourism"
                  : "観光についてもっと知る"}{" "}
                <i className="far fa-long-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {currentData.map((item, index) => (
          <div key={index} className="col-lg-4 col-sm-6">
            <div className="featured__post">
              <div
                className="featured__thumb"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>
              <div className="featured__content">
                <ul className="tgbanner__content-meta list-wrap">
                  <li className="category">
                    <Link href="/impLinks">{item.category}</Link>
                  </li>
                  <li>
                    <span className="by">By</span>{" "}
                    <Link href="/impLinks">Pakistan</Link>
                  </li>
                </ul>
                <h4 className="title tgcommon__hover">
                  <Link href={item.link} target="_blank">
                    {item.title}
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewTourismComponent;
