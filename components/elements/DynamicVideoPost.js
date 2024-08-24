import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import { useLanguage } from '@/contexts/LanguageContext';
import data from '@/util/blogData'; // Assuming this contains your English data
import dataJpn from '@/util/dataJpn'; // Assuming this contains your Japanese data

const DynamicVideoPosts = () => {
  const { language } = useLanguage();
  const [isOpen, setOpen] = useState(false);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    // Set the data based on the selected language
    if (language === 'ENG') {
      setCurrentData(data);
    } else {
      setCurrentData(dataJpn);
    }
  }, [language]);

  // Extract the dynamic elements
  const author = currentData[0]?.author || 'Tokyo Embassay'; // Fallback to 'Tokyo Embassay' if not available
  const date = currentData[0]?.date || 'Nov 21, 2023'; // Fallback to a default date if not available

  return (
    <div className="row">
      <div className="col-xl-8 col-lg-7">
        <div className="video__post-item big-post">
          <div className="video__post-thumb">
            <Link href={currentData[0]?.link || '#'}>
              <img
                src={`/assets/img/${currentData[0]?.group}/${currentData[0]?.img}`}
                alt="img"
              />
            </Link>
            <a onClick={() => setOpen(true)} className="popup-video">
              <i className="fas fa-play" />
            </a>
          </div>
          <div className="video__post-content">
            <ul className="tgbanner__content-meta list-wrap">
              <li className="category">
                <Link href="/blog">{currentData[0]?.category}</Link>
              </li>
              <li>
                <span className="by">By</span>{" "}
                <Link href="/blog">{author}</Link>
              </li>
              <li>{date}</li>
            </ul>
            <h3 className="title tgcommon__hover">
              <Link href={currentData[0]?.link || '#'}>
                {currentData[0]?.title}
              </Link>
            </h3>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-5">
        {currentData.slice(37, 41).map((item, i) => (
          <div className="video__post-item side-post" key={i}>
            <div className="video__post-thumb tgImage__hover">
              <a onClick={() => setOpen(true)} className="popup-video">
                <img
                  src={`/assets/img/${item.group}/${item.img}`}
                  alt="img"
                />
                <i className="fas fa-play" />
              </a>
            </div>
            <div className="video__post-content">
              <ul className="tgbanner__content-meta list-wrap">
                <li className="category">
                  <Link href="/blog">{item.category}</Link>
                </li>
                <li>
                  <span className="by">By</span>{" "}
                  <Link href="/blog">{item.author}</Link>
                </li>
                <li>{item.date}</li>
              </ul>
              <h3 className="title tgcommon__hover">
                <Link href={`/blog/${item.id}`}>{item.title}</Link>
              </h3>
            </div>
          </div>
        ))}
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="vfhzo499OeA"
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
};

export default DynamicVideoPosts;
