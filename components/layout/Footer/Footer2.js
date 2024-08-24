import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const footerData = {
  ENG: {
    contactUs: "Contact Us",
    termsOfUse: "Terms of Use",
    advertise: "Advertise",
    store: "Store",
    designedBy: "Designed by",
  },
  JPN: {
    contactUs: "お問い合わせ",
    termsOfUse: "利用規約",
    advertise: "広告",
    store: "店",
    designedBy: "設計者",
  },
};

export default function Footer2({ footerClass }) {
  const { language } = useLanguage();
  const currentData = footerData[language];

  return (
    <>
      <footer className={`footer-area ${footerClass}`}>
        <div className="container">
          <div className="footer__logo-wrap">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4">
                <div className="footer__logo logo">
                  <Link href="/">
                    <img src="/assets/img/logo/EmbassyLogo.png" alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="footer__social">
                  <ul className="list-wrap">
                    <li>
                      <a
                        href="https://www.facebook.com/PakistaninJapan/"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" /> Facebook{" "}
                        <span>25K</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/PakinJapan?t=x51w8VbrUvA1lcmCHpMGyw&s=09"
                        target="_blank"
                      >
                        <i className="fab fa-twitter" /> Twitter{" "}
                        <span>44K</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtu.be/dXackGvJQVs?si=rG2Ghswoer74Hxda"
                        target="_blank"
                      >
                        <i className="fab fa-youtube" /> Youtube{" "}
                        <span>91K</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright__text">
                  <p>
                    {currentData.designedBy}{" "}
                    <a href="https://fistasolutions.com/" target="_blank">
                      FISTA SOLUTIONS
                    </a>{" "}
                    - {new Date().getFullYear()}
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="copyright__menu">
                  <ul className="list-wrap">
                    <li>
                      <a href="#">{currentData.contactUs}</a>
                    </li>
                    <li>
                      <a href="#">{currentData.termsOfUse}</a>
                    </li>
                    <li>
                      <a href="#">{currentData.advertise}</a>
                    </li>
                    <li>
                      <a href="#">{currentData.store}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
