import Link from "next/link";
import quaidData from "@/util/quidData";
import quaidDataJpn from "@/util/quidDataJpn";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NftSlider() {
  const { language } = useLanguage();
  const currentData = language === "ENG" ? quaidData : quaidDataJpn;
  return (
    <>
      <div className="slider-container">
        {currentData.map((item) => (
          <div className="slider__item" key={item.id}>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider__content">
                  <ul
                    className="tgbanner__content-meta list-wrap"
                    data-animation-in="tg-fadeInUp"
                    data-delay-in=".2"
                  >
                    <li className="category">
                      <Link href="/blog">{item.qoute}</Link>
                    </li>
                    <li>
                      <span className="by">by</span>{" "}
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
                    href="/"
                    className="btn border-btn"
                    data-animation-in="tg-fadeInUp"
                    data-delay-in={1}
                  >
                    <span className="btn-text">{item.readMore}</span>{" "}
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="slider__img-wrap">
                  <img
                    src={`/assets/img/nft/${item.img}`}
                    className="main-img"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
