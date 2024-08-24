import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import menuDataEn from "@/util/MenuDataEng";
import menuDataJp from "@/util/MenuDataJpn";

const ThemeSwitch = dynamic(() => import("@/components/elements/ThemeSwitch"), {
  ssr: false,
});

const Menu = ({
  handleMobileMenuOpen,
  handleSidebarOpen,
  offCanvasNav,
  logoAlt,
  white,
}) => {
  const router = useRouter();
  const [showMore, setShowMore] = useState(false);
  const [hoverMore, setHoverMore] = useState(false);
  const { language } = useLanguage();
  const currentData = language === "ENG" ? menuDataEn : menuDataJp;

  const handleToggleMore = (e) => {
    e.preventDefault();
    setShowMore(!showMore);
  };

  const handleMouseEnter = () => setHoverMore(true);
  const handleMouseLeave = () => setHoverMore(false);

  const renderSubMenu = (subMenu) => (
    <ul className="sub-menu pak-japan-sub-menu">
      {subMenu.map((item, index) => (
        <li
          key={index}
          className={router.pathname === item.link ? "active pak-japan-sub-menu-item" : "pak-japan-sub-menu-item"}
        >
          <Link href={item.link}>{item.title}</Link>
          {item.subMenu && renderSubMenu(item.subMenu)}
        </li>
      ))}
    </ul>
  );

  const moreMenuData = currentData.find(
    (item) => item.title === "More" || item.title === "もっと見る"
  );
  const moreText = moreMenuData?.moreText || {};

  return (
    <>
      <div className="tgmenu__wrap pak-japan-menu-wrap">
        <nav className="tgmenu__nav pak-japan-menu-nav">
          <div className="logo d-block d-lg-none pak-japan-logo">
            <Link href="/" className="logo-dark">
              <img src="/assets/img/logo/logo.png" alt="Logo" />
            </Link>
            <Link href="/" className="logo-light">
              <img src="/assets/img/logo/w_logo.png" alt="Logo" />
            </Link>
          </div>
          {logoAlt && (
            <div className="d-flex gap-4 align-items-center pak-japan-header">
              <div className="offcanvas-toggle pak-japan-sidebar-toggle" onClick={handleSidebarOpen}>
                <Link href="#">
                  <i className="flaticon-menu-bar" />
                </Link>
              </div>
              <div className="logo pak-japan-logo">
                <Link href="/">
                  <img
                    src={`assets/img/logo/${white ? "w_logo" : "logo"}.png`}
                    alt="Logo"
                  />
                </Link>
              </div>
            </div>
          )}
          {offCanvasNav && (
            <div className="offcanvas-toggle pak-japan-offcanvas-toggle" onClick={handleSidebarOpen}>
              <a href="#">
                <i className="flaticon-menu-bar" />
              </a>
            </div>
          )}
          <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex pak-japan-main-menu">
            <ul className="navigation pak-japan-navigation">
              {currentData
                .filter(
                  (item) => item.title !== "More" && item.title !== "もっと見る"
                )
                .map((item, index) => (
                  <li
                    key={index}
                    className={`menu-item${
                      item.subMenu ? " menu-item-has-children pak-japan-menu-item" : " pak-japan-menu-item"
                    }${router.pathname === item.link ? " active pak-japan-active-item" : ""}`}
                  >
                    <Link href={item.link}>{item.title}</Link>
                    {item.subMenu && renderSubMenu(item.subMenu)}
                  </li>
                ))}
              <li
                className={`menu-item${(showMore || hoverMore) ? " menu-item-has-children pak-japan-more-item" : " pak-japan-more-item"}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="#" onClick={handleToggleMore}>
                  <span className="more-text">{moreText.more || "More"}</span>
                </Link>
                {(showMore || hoverMore) && moreMenuData?.subMenu && (
                  <>{renderSubMenu(moreMenuData.subMenu)}</>
                )}
              </li>
            </ul>
          </div>
          <div className="tgmenu__action pak-japan-action">
            <ul className="list-wrap pak-japan-list-wrap">
              <li className="mode-switcher">
                <ThemeSwitch />
              </li>
            </ul>
          </div>
        </nav>
        <div className="mobile-nav-toggler pak-japan-mobile-nav-toggler" onClick={handleMobileMenuOpen}>
          <i className="fas fa-bars" />
        </div>
      </div>
    </>
  );
};

export default Menu;
