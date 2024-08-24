import { Swiper, SwiperSlide } from "swiper/react";
import data from "@/util/blogData";
import dataJpn from "@/util/dataJpn";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useLanguage } from "@/contexts/LanguageContext";

export default function InteriroSlider() {
  const { language } = useLanguage();
  console.log(language)
  const currentData = language === "ENG" ? data : dataJpn;
  console.log(currentData);

  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".block-gallery-pagination",
        }}
        className="slider-active"
      >
        {currentData.slice(16, 23).map((item, i) => (
          <SwiperSlide className="slider__item" key={i}>
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="slider__content">
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
                  <h2
                    className="title"
                    data-animation-in="tg-fadeInUp"
                    data-delay-in=".6"
                  >
                    {item.title}
                  </h2>
                  <Link
                    href="/blog/1"
                    className="btn"
                    data-animation-in="tg-fadeInUp"
                    data-delay-in={1}
                  >
                    <span className="btn-text">{item.readMore}</span>{" "}
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="slider__img-wrap">
                  <img
                    src={`/assets/img/${item.group}/${item.img}`}
                    className="main-img"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
