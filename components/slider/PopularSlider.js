import { Swiper, SwiperSlide } from "swiper/react";
import data from "@/util/blogData";
import dataJpn from "@/util/dataJpn"; // Assuming you have Japanese data in dataJpn
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useLanguage } from "@/contexts/LanguageContext";

// Data for the slider content in English
const sliderTextEng = {
  news: "News",
  popularNews: "Popular News",
  morePopularNews: "More Popular News",
};

// Data for the slider content in Japanese
const sliderTextJpn = {
  news: "ニュース",
  popularNews: "人気ニュース",
  morePopularNews: "もっと人気のニュース",
};

export default function PopularSlider() {
  const { language } = useLanguage();
  const currentData = language === "ENG" ? data : dataJpn;
  const currentText = language === "ENG" ? sliderTextEng : sliderTextJpn;

  return (
    <>
      <div className="section__title-wrap mb-40">
        <div className="row align-items-end">
          <div className="col-sm-6">
            <div className="section__title">
              <span className="section__sub-title">{currentText.news}</span>
              <h3 className="section__main-title">{currentText.popularNews}</h3>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="section__read-more text-start text-sm-end">
              <Link href="/news">
                {currentText.morePopularNews}{" "}
                <i className="far fa-long-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".block-gallery-pagination",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="swiper-wrapper"
      >
        {currentData.slice(23, 26).map((item, i) => (
          <SwiperSlide key={i}>
            <div className="trending__post">
              <div className="trending__post-thumb tgImage__hover">
                <Link href="#" className="addWish">
                  <i className="fal fa-heart" />
                </Link>
                <Link href={`/blog/${item.id}`}>
                  <img
                    src={`/assets/img/${item.group}/${item.img}`}
                    alt="img"
                  />
                </Link>
                {item.trending && (
                  <span className="is_trend">
                    <i className="fas fa-bolt" />
                  </span>
                )}
              </div>
              <div className="trending__post-content">
                <ul className="tgbanner__content-meta list-wrap">
                  <li className="category">
                    <Link href="/news">{item.category}</Link>
                  </li>
                  <li>
                    <span className="by">By</span>{" "}
                    <Link href="/news">{item.author}</Link>
                  </li>
                  <li>{item.date}</li>
                </ul>
                <h4 className="title tgcommon__hover">
                  <Link href="/news">{item.title}</Link>
                </h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
