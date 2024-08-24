import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  ENG: {
    category: "Category",
    by: "By",
    country: "Pakistan",
    posts: [
      {
        title: "Pakistan Radio",
        link: "https://radio.gov.pk/live-streaming",
        img: "pakRadio.png",
        category: "Pakistan Radio",
      },
      {
        title: "Coke Studio",
        link: "https://season15.cokestudio.com.pk/?gad_source=1&gclid=CjwKCAjwzIK1BhAuEiwAHQmU3kFSkXFxp7uYyo4Q4v89s254x5NhCQMlZLKwx7x7oiNkjTHuS9e12xoCg5MQAvD_BwE",
        img: "cokeStudio.png",
        category: "Coke Studio",
      },
      {
        title: "Pakistan Music",
        link: "/tourism",
        img: "pakMusic.png",
        category: "Pakistan Music",
      },
      {
        title: "Video Gallery",
        link: "/tourism",
        img: "videoGallery.png",
        category: "Video Gallery",
      },
      {
        title: "Beautiful Pakistan",
        link: "/tourism",
        img: "ptdc.png",
        category: "Beautiful Pakistan",
      },
    ],
  },
  JPN: {
    category: "カテゴリー",
    by: "作成者",
    country: "パキスタン",
    posts: [
      {
        title: "パキスタンラジオ",
        link: "https://radio.gov.pk/live-streaming",
        img: "pakRadio.png",
        category: "パキスタンラジオ",
      },
      {
        title: "コークスタジオ",
        link: "https://season15.cokestudio.com.pk/?gad_source=1&gclid=CjwKCAjwzIK1BhAuEiwAHQmU3kFSkXFxp7uYyo4Q4v89s254x5NhCQMlZLKwx7x7oiNkjTHuS9e12xoCg5MQAvD_BwE",
        img: "cokeStudio.png",
        category: "コークスタジオ",
      },
      {
        title: "パキスタン音楽",
        link: "/tourism",
        img: "pakMusic.png",
        category: "パキスタン音楽",
      },
      {
        title: "ビデオギャラリー",
        link: "/tourism",
        img: "videoGallery.png",
        category: "ビデオギャラリー",
      },
      {
        title: "美しいパキスタン",
        link: "/tourism",
        img: "ptdc.png",
        category: "美しいパキスタン",
      },
    ],
  },
};

const MoreTourismComponent = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      <div className="section__title-wrap mb-40">
        <div className="row align-items-end">
          <div className="col-sm-6">
            <div className="section__title">
              <span className="section__sub-title">Tourism</span>
              <h3 className="section__main-title">Tourism Links</h3>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="section__read-more text-start text-sm-end">
              <Link href="/tourism">
                More About Tourism <i className="far fa-long-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {t.posts.map((post, index) => (
          <div className="col-lg-4 col-sm-6" key={index}>
            <div className="featured__post">
              <div
                className="featured__thumb"
                style={{
                  backgroundImage: `url(/assets/img/tourism/${post.img})`,
                }}
              ></div>
              <div className="featured__content">
                <ul className="tgbanner__content-meta list-wrap">
                  <li className="category">
                    <Link href="/impLinks">{post.category}</Link>
                  </li>
                  <li>
                    <span className="by">{t.by}</span>{" "}
                    <Link href="/impLinks">{t.country}</Link>
                  </li>
                </ul>
                <h4 className="title tgcommon__hover">
                  <Link href={post.link} target="_blank">
                    {post.title}
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

export default MoreTourismComponent;
