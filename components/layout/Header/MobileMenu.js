import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
const menuTranslations = {
  ENG: {
    home: "Home",
    about: "About Us",
    services: "Consular Services",
    pakJapan: "Pak-Japan",
    bilateralRelationship: "Bilateral Relationship",
    formerAmbassadors: "List of Former Ambassadors",
    historicalPictures: "Pakistan and Japan Historical Pictures",
    awardsRecipients: "Recipients of Awards",
    booksInJapanese: "Books about Pakistan in Japanese",
    economy: "Economy",
    kashmir: "Kashmir",
    downloads: "Downloads",
    humanResource: "Human Resource",
    immigrationControl: "JPN Immigration Control",
    titp: "TITP",
    ssw: "SSW",
    mediaCenter: "Media Center",
  },
  JPN: {
    home: "ホーム",
    about: "私たちについて",
    services: "領事サービス",
    pakJapan: "パキスタン-日本",
    bilateralRelationship: "二国間関係",
    formerAmbassadors: "元大使のリスト",
    historicalPictures: "パキスタンと日本の歴史的写真",
    awardsRecipients: "受賞者",
    booksInJapanese: "日本語のパキスタンに関する本",
    economy: "経済",
    kashmir: "カシミール",
    downloads: "ダウンロード",
    humanResource: "人材",
    immigrationControl: "日本の移民管理",
    titp: "TITP",
    ssw: "SSW",
    mediaCenter: "メディアセンター",
  }
};
 // Import the language context

const MobileMenu = ({ handleMobileMenuClose, openClass }) => {
  const { language } = useLanguage(); // Get the current language
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  const translations = menuTranslations[language];

  return (
    <>
      <div className="tgmobile__menu">
        <nav className="tgmobile__menu-box">
          <div className="close-btn" onClick={handleMobileMenuClose}>
            <i className="fas fa-times" />
          </div>
          <div className="nav-logo">
            <Link href="/" className="logo-dark">
              <img src="/assets/img/logo/EmbassyLogo.png" alt="Logo" />
            </Link>
            <Link href="/" className="logo-light">
              <img src="/assets/img/logo/EmbassyLogo.png" alt="Logo" />
            </Link>
          </div>
          <div className="tgmobile__search">
            <form action="#">
              <input type="text" placeholder={translations.search || "Search here..."} />
              <button>
                <i className="far fa-search" />
              </button>
            </form>
          </div>
          <div className="tgmobile__menu-outer">
            <ul className="navigation">
              <li>
                <Link href="/">{translations.home}</Link>
              </li>
              <li>
                <Link href="/about">{translations.about}</Link>
              </li>
              <li>
                <Link href="/services">{translations.services}</Link>
              </li>
              <li
                className="menu-item-has-children"
                onClick={() => handleToggle(2)}
              >
                <Link href="pakJapan">{translations.pakJapan}</Link>
                <ul
                  className="sub-menu"
                  style={
                    isActive.key === 2
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <li>
                    <Link href="/#">{translations.bilateralRelationship}</Link>
                  </li>
                  <li>
                    <Link href="/formerAmbassadors">{translations.formerAmbassadors}</Link>
                  </li>
                  <li>
                    <Link href="/#">{translations.historicalPictures}</Link>
                  </li>
                  <li>
                    <Link href="/#">{translations.awardsRecipients}</Link>
                  </li>
                  <li>
                    <Link href="#">{translations.booksInJapanese}</Link>
                  </li>
                </ul>
                <div
                  className={`dropdown-btn ${isActive.key === 2 ? "open" : ""}`}
                >
                  <span className="plus-line" />
                </div>
              </li>
              <li>
                <Link href="/economy">{translations.economy}</Link>
              </li>
              <li>
                <Link href="/kashmir">{translations.kashmir}</Link>
              </li>
              <li>
                <Link href="/downloads">{translations.downloads}</Link>
              </li>
              <li
                className="menu-item-has-children"
                onClick={() => handleToggle(3)}
              >
                <Link href="humanResource">{translations.humanResource}</Link>
                <ul
                  className="sub-menu"
                  style={
                    isActive.key === 3
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <li>
                    <Link href="/immigrationControl">{translations.immigrationControl}</Link>
                  </li>
                  <li>
                    <Link href="/titp">{translations.titp}</Link>
                  </li>
                  <li>
                    <Link href="/ssw">{translations.ssw}</Link>
                  </li>
                </ul>
                <div
                  className={`dropdown-btn ${isActive.key === 3 ? "open" : ""}`}
                >
                  <span className="plus-line" />
                </div>
              </li>
              <li>
                <Link href="/mediaCenter">{translations.mediaCenter}</Link>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="list-wrap">
              <li>
                <Link
                  href="https://www.facebook.com/PakistaninJapan/"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/PakinJapan?t=x51w8VbrUvA1lcmCHpMGyw&s=09"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-instagram" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-linkedin-in" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-youtube" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div
        className="tgmobile__menu-backdrop"
        onClick={handleMobileMenuClose}
      />
    </>
  );
};

export default MobileMenu;
