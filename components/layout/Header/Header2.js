import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import Sidebar from "./Sidebar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const Header2 = ({
  scroll,
  handleMobileMenuOpen,
  handleMobileMenuClose,
  handleSidebarClose,
  handleSidebarOpen,
}) => {
  const { language, toggleLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (newLanguage) => {
    toggleLanguage(newLanguage);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <header className="header__style-two">
        <div className="header__top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-4 d-none d-lg-block">
                <div className="d-flex gap-4 align-items-center">
                  <div className="offcanvas-toggle" onClick={handleSidebarOpen}>
                    <Link href="#">
                      <i className="flaticon-menu-bar" />
                    </Link>
                  </div>
                  <div className="header__top-logo logo">
                    <Link href="/" className="logo-dark">
                      <img src="/assets/img/logo/EmbassyLogo.png" alt="Logo" />
                    </Link>
                    <Link href="/" className="logo-light">
                      <img src="/assets/img/logo/EmbassyLogo.png" alt="Logo" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="footer__social">
                  <ul className="list-wrap">
                    <li>
                      <Link
                        href="https://www.facebook.com/PakistaninJapan/"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" /> Facebook{" "}
                        <span>25K</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://x.com/PakinJapan?t=x51w8VbrUvA1lcmCHpMGyw&s=09"
                        target="_blank"
                      >
                        <i className="fab fa-twitter" /> Twitter{" "}
                        <span>44K</span>
                      </Link>
                    </li>
                    <div className="header__top-right">
                      <ul className="list-wrap">
                        <li className="lang">
                          <div className="dropdown">
                            <button
                              className={`dropdown-toggle ${language}`}
                              type="button"
                              onClick={toggleDropdown}
                            >
                              {language}
                            </button>
                            {dropdownOpen && (
                              <ul className="dropdown-menu show">
                                <li>
                                  <button
                                    className="dropdown-item"
                                    onClick={() =>
                                      handleLanguageChange(
                                        language === "ENG" ? "JPN" : "ENG"
                                      )
                                    }
                                  >
                                    {language === "ENG" ? "JPN" : "ENG"}
                                  </button>
                                </li>
                              </ul>
                            )}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="header-fixed-height"
          className={`${scroll ? "active-height" : ""}`}
        />
        <div
          id="sticky-header"
          className={`tg-header__area ${scroll ? "sticky-menu" : ""}`}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Menu
                  handleMobileMenuOpen={handleMobileMenuOpen}
                  handleSidebarOpen={handleSidebarOpen}
                />
                <MobileMenu handleMobileMenuClose={handleMobileMenuClose} />
              </div>
            </div>
          </div>
        </div>
        <Sidebar handleSidebarClose={handleSidebarClose} />
      </header>
    </>
  );
};

export default Header2;
