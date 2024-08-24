import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const newsletterData = {
  ENG: {
    subTitle: "newsletter",
    title: "Get notified about the latest news on our Embassy Website",
    emailPlaceholder: "Email address",
    checkboxLabel: "I agree that my submitted data is being collected and stored.",
    subscribeButton: "Subscribe",
  },
  JPN: {
    subTitle: "ニュースレター",
    title: "大使館のウェブサイトで最新ニュースを通知します",
    emailPlaceholder: "メールアドレス",
    checkboxLabel: "提出されたデータが収集および保存されることに同意します。",
    subscribeButton: "申し込む",
  },
};

const NewsLetterComponent = () => {
  const { language } = useLanguage();
  const currentData = newsletterData[language];

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-8">
            <div className="newsletter__title text-center mb-35">
              <div className="newsletter__title-icon">
                <i className="fas fa-envelope-open-text" />
              </div>
              <span className="sub-title">{currentData.subTitle}</span>
              <h4 className="title">
                {currentData.title}
              </h4>
            </div>
            <div className="newsletter__form-wrap text-center">
              <form action="#" className="newsletter__form">
                <div className="newsletter__form-grp">
                  <input
                    type="email"
                    placeholder={currentData.emailPlaceholder}
                    required
                  />
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      {currentData.checkboxLabel}
                    </label>
                  </div>
                </div>
                <button className="btn" type="submit">
                  <span className="text">{currentData.subscribeButton}</span>
                  <i className="fas fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterComponent;
