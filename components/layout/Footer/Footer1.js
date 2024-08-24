import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const footerData = {
  ENG: {
    aboutUs: "About Us",
    ambassador: "Ambassador",
    keyPersonnel: "Key Personnel",
    embassyLocation: "Embassy and Consulate Location",
    consularServices: "Consular Services",
    faqs: "Frequently Asked Questions (FAQs)",
    digitalPowerOfAttorney: "Digital Power of Attorney",
    consularServicesForPakistanis: "Consular Services for Pakistanis",
    consularServicesForForeigners: "Consular Services for Foreigners",
    applyForEVisa: "Apply for E-Visa",
    foreignPolicy: "Foreign policy",
    pakJapan: "Pak-Japan",
    bilateralRelationship: "Bilateral Relationship",
    jointStatement: "Pakistan Japan Joint Statement 2011",
    formerAmbassadors: "List of Former Ambassadors",
    historicalPictures: "Pakistan and Japan Historical Pictures",
    recipientsOfAwards: "Recipients of Awards",
    booksAboutPakistan: "Books about Pakistan in Japanese",
    downloads: "Downloads",
    consularServicesForms: "CONSULAR SERVICES FORMS",
    softwareEngineers: "IT/Software Engineers related opportunities",
    humanResource: "Human Resource",
    japanImmigrationControl: "Japan Immigration control",
    titp: "TITP",
    ssw: "SSW",
    mediaCenter: "Media Center",
    newsAlert: "News Alert",
    newsletters: "Newsletters",
    tourism: "Tourism",
    videoGallery: "Video Gallery",
    contactUs: "Contact Us",
    termsOfUse: "Terms of Use",
    advertise: "Advertise",
    store: "Store",
    designedBy: "Designed by",
  },
  JPN: {
    aboutUs: "私たちに関しては",
    ambassador: "大使",
    keyPersonnel: "重要人物",
    embassyLocation: "大使館と領事館の場所",
    consularServices: "領事サービス",
    faqs: "よくある質問 (FAQ)",
    digitalPowerOfAttorney: "デジタル代理権",
    consularServicesForPakistanis: "パキスタン人向け領事サービス",
    consularServicesForForeigners: "外国人向け領事サービス",
    applyForEVisa: "E-ビザを申請する",
    foreignPolicy: "外交政策",
    pakJapan: "パクジャパン",
    bilateralRelationship: "二国間関係",
    jointStatement: "パキスタン日本共同声明 2011",
    formerAmbassadors: "歴代大使のリスト",
    historicalPictures: "パキスタンと日本の歴史的写真",
    recipientsOfAwards: "賞の受賞者",
    booksAboutPakistan: "日本語でのパキスタンについての本",
    downloads: "ダウンロード",
    consularServicesForms: "領事サービスのフォーム",
    softwareEngineers: "IT/ソフトウェアエンジニアに関連する機会",
    humanResource: "人材",
    japanImmigrationControl: "日本の移民管理",
    titp: "TITP",
    ssw: "SSW",
    mediaCenter: "メディアセンター",
    newsAlert: "ニュースアラート",
    newsletters: "ニュースレター",
    tourism: "観光",
    videoGallery: "ビデオギャラリー",
    contactUs: "お問い合わせ",
    termsOfUse: "利用規約",
    advertise: "広告",
    store: "店",
    designedBy: "設計者",
  },
};

export default function Footer1({ footerClass }) {
  const { language } = useLanguage();
  const currentData = footerData[language];

  return (
    <>
      <footer className="footer-area black-bg">
        <div className="container">
          <div className="footer__top-wrap">
            <div className="row">
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer__widget">
                  <h4 className="fw-title">{currentData.aboutUs}</h4>
                  <ul className="list-wrap">
                    <li>
                      <Link href="/about">{currentData.ambassador}</Link>
                    </li>
                    <li>
                      <Link href="/about">{currentData.keyPersonnel}</Link>
                    </li>
                    <li>
                      <Link href="/about">{currentData.embassyLocation}</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer__widget">
                  <h4 className="fw-title">{currentData.consularServices}</h4>
                  <ul className="list-wrap">
                    <li>
                      <Link href="/services">
                        {currentData.faqs}
                      </Link>
                    </li>
                    <li>
                      <Link href="/digitalAttorny">{currentData.digitalPowerOfAttorney}</Link>
                    </li>
                    <li>
                      <Link href="/counsularServicePak">
                        {currentData.consularServicesForPakistanis}
                      </Link>
                    </li>
                    <li>
                      <Link href="/counsularServiceFor">
                        {currentData.consularServicesForForeigners}
                      </Link>
                    </li>
                    <li>
                      <Link href="/eVisa">{currentData.applyForEVisa}</Link>
                    </li>
                    <li>
                      <Link href="/counsularServiceFor">{currentData.foreignPolicy}</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer__widget">
                  <h4 className="fw-title">{currentData.pakJapan}</h4>
                  <ul className="list-wrap">
                    <li>
                      <Link href="/pakJapan">{currentData.bilateralRelationship}</Link>
                    </li>
                    <li>
                      <Link href="#">{currentData.jointStatement}</Link>
                    </li>
                    <li>
                      <Link href="/formerAmbassadors">{currentData.formerAmbassadors}</Link>
                    </li>
                    <li>
                      <Link href="#">{currentData.historicalPictures}</Link>
                    </li>
                    <li>
                      <Link href="#">{currentData.recipientsOfAwards}</Link>
                    </li>
                    <li>
                      <Link href="#">{currentData.booksAboutPakistan}</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer__widget">
                  <h4 className="fw-title">{currentData.downloads}</h4>
                  <ul className="list-wrap">
                    <li>
                      <Link href="/downloads">{currentData.consularServicesForms}</Link>
                    </li>
                    <li>
                      <Link href="/downloads">{currentData.softwareEngineers}</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer__widget">
                  <h4 className="fw-title">{currentData.humanResource}</h4>
                  <ul className="list-wrap">
                    <li>
                      <Link href="/immigrationControl">{currentData.japanImmigrationControl}</Link>
                    </li>
                    <li>
                      <Link href="/titp">{currentData.titp}</Link>
                    </li>
                    <li>
                      <Link href="/ssw">{currentData.ssw}</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer__widget">
                  <h4 className="fw-title">{currentData.mediaCenter}</h4>
                  <ul className="list-wrap">
                    <li>
                      <Link href="/mediaCenter">{currentData.newsAlert}</Link>
                    </li>
                    <li>
                      <Link href="/news">{currentData.newsletters}</Link>
                    </li>
                    <li>
                      <Link href="/tourism">{currentData.tourism}</Link>
                    </li>
                    <li>
                      <Link href="/kashmir">{currentData.videoGallery}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
                    <li>
                      <Link
                        href="https://youtu.be/dXackGvJQVs?si=rG2Ghswoer74Hxda"
                        target="_blank"
                      >
                        <i className="fab fa-youtube" /> Youtube{" "}
                        <span>91K</span>
                      </Link>
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
                      <Link href="#">{currentData.contactUs}</Link>
                    </li>
                    <li>
                      <Link href="#">{currentData.termsOfUse}</Link>
                    </li>
                    <li>
                      <Link href="#">{currentData.advertise}</Link>
                    </li>
                    <li>
                      <Link href="#">{currentData.store}</Link>
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
