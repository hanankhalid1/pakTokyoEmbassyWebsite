import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

// Data for the sidebar content in English
const sidebarDataEng = {
  getInTouch: "Get In Touch",
  email: "pareptokyo@hotmail.com",
  phone: "+ 81 3 5421 7741",
  address: "4-6-17, Minami-Azabu, Minato-Ku, Tokyo",
  embassyName: "The Embassy of Pakistan Tokyo"
};

// Data for the sidebar content in Japanese
const sidebarDataJpn = {
  getInTouch: "お問い合わせ",
  email: "pareptokyo@hotmail.com",
  phone: "+ 81 3 5421 7741",
  address: "東京都港区南麻布4-6-17",
  embassyName: "在東京パキスタン大使館"
};

export default function Sidebar({ handleSidebarClose }) {
  const { language } = useLanguage();
  const [currentData, setCurrentData] = useState(sidebarDataEng);

  useEffect(() => {
    console.log("Language changed:", language);

    if (language === "ENG") {
      console.log("Setting data to English");
      setCurrentData(sidebarDataEng);
    } else {
      console.log("Setting data to Japanese");
      setCurrentData(sidebarDataJpn);
    }
  }, [language]);

  useEffect(() => {
    console.log("Current data:", currentData);
  }, [currentData]);

  return (
    <>
      <div className="offCanvas__wrap">
        <div className="offCanvas__body">
          <div className="offCanvas__toggle" onClick={handleSidebarClose}>
            <i className="flaticon-addition" />
          </div>
          <div className="offCanvas__content">
            <div className="logo">
              <Link href="/" className="logo-dark">
                <img
                  src="/assets/img/logo/EmbassyLogo.png"
                  alt="Logo"
                  className="offCanvas__logo-img"
                />
              </Link>
              <Link href="/" className="logo-light">
                <img src="/assets/img/logo/EmbassyLogo.png" alt="Logo" />
              </Link>
            </div>
            <p>{currentData.embassyName}</p>
            <ul className="offCanvas__instagram list-wrap">
              <li>
                <Link
                  href="/assets/img/blog/1.png"
                  target="_blank"
                  className="popup-image"
                >
                  <img src="/assets/img/blog/1.png" alt="img" />
                </Link>
              </li>
              <li>
                <Link
                  href="/assets/img/blog/2.png"
                  target="_blank"
                  className="popup-image"
                >
                  <img src="/assets/img/blog/2.png" alt="img" />
                </Link>
              </li>
              <li>
                <Link
                  href="/assets/img/blog/3.png"
                  target="_blank"
                  className="popup-image"
                >
                  <img src="/assets/img/blog/3.png" alt="img" />
                </Link>
              </li>
              <li>
                <Link
                  href="/assets/img/blog/4.png"
                  target="_blank"
                  className="popup-image"
                >
                  <img src="/assets/img/blog/4.png" alt="img" />
                </Link>
              </li>
              <li>
                <Link
                  href="/assets/img/aboutPakistan/fistaJapan.jpg"
                  target="_blank"
                  className="popup-image"
                >
                  <img
                    src="/assets/img/aboutPakistan/fistaJapan.jpg"
                    alt="img"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/assets/img/aboutPakistan/fistaJapan2.jpg"
                  target="_blank"
                  className="popup-image"
                >
                  <img
                    src="/assets/img/aboutPakistan/FistaJapan2.jpg"
                    alt="img"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="offCanvas__contact">
            <h4 className="title">{currentData.getInTouch}</h4>
            <ul className="offCanvas__contact-list list-wrap">
              <li>
                <i className="fas fa-envelope-open" />
                <Link href="/mailto:info@webmail.com">
                  {currentData.email}
                </Link>
              </li>
              <li>
                <i className="fas fa-phone" />
                <Link href="/tel:88899988877">{currentData.phone}</Link>
              </li>
              <li>
                <i className="fas fa-map-marker-alt" />
                {currentData.address}
              </li>
            </ul>
            <ul className="offCanvas__social list-wrap">
              <li>
                <Link href="https://www.facebook.com/PakistaninJapan/">
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href="https://x.com/PakinJapan?t=x51w8VbrUvA1lcmCHpMGyw&s=09">
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://youtu.be/dXackGvJQVs?si=rG2Ghswoer74Hxda"
                  target="_blank"
                >
                  <i className="fab fa-youtube" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="offCanvas__overlay" onClick={handleSidebarClose} />
    </>
  );
}
