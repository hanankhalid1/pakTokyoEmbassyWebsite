import { Swiper, SwiperSlide } from "swiper/react";
import data from "@/util/blogData";
import dataJpn from "@/util/dataJpn";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useLanguage } from "@/contexts/LanguageContext";

// Text data for English
const textDataEng = {
  subTitle: "Press Release",
  mainTitle: "Press Releases",
  moreText: "More Press Release"
};

// Text data for Japanese
const textDataJpn = {
  subTitle: "プレスリリース",
  mainTitle: "プレスリリース",
  moreText: "さらにプレスリリース"
};

export default function TrendingSlider1({ showItem }) {
  const { language } = useLanguage();
  const currentData = language === "ENG" ? data : dataJpn;
  const currentText = language === "ENG" ? textDataEng : textDataJpn;

  return (
    <>
      <div className="section__title-wrap mb-40">
        <div className="row align-items-end">
          <div className="col-sm-6">
            <div className="section__title">
              <span className="section__sub-title">{currentText.subTitle}</span>
              <h3 className="section__main-title">{currentText.mainTitle}</h3>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="section__read-more text-start text-sm-end">
              <Link href="/pressRelease">
                {currentText.moreText} <i className="far fa-long-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={showItem}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
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
            slidesPerView: showItem,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: showItem,
            spaceBetween: 30,
          },
        }}
        className="swiper-wrapper"
      >
        {currentData.slice(32, 36).map((item, i) => (
          <SwiperSlide key={i}>
            <div className="trending__post">
              <div className="trending__post-thumb tgImage__hover">
                <Link href="/#" className="addWish">
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
                    <Link href="/blog">{item.category}</Link>
                  </li>
                  <li>
                    <span className="by">By</span>{" "}
                    <Link href="/blog">{item.author}</Link>
                  </li>
                </ul>
                <h4 className="title tgcommon__hover">
                  <Link href={`/blog/${item.id}`}>{item.title}</Link>
                </h4>
                <ul className="post__activity list-wrap">
                  <li>
                    <i className="fal fa-signal" /> 1.0k
                  </li>
                  <li>
                    <Link href={`/blog/${item.id}`}>
                      <i className="fal fa-comment-dots" /> 128
                    </Link>
                  </li>
                  <li>
                    <i className="fal fa-share-alt" /> 29
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
