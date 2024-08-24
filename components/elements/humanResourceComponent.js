import Link from "next/link";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const HumanResourceComponent = () => {
  const { language } = useLanguage();

  // Dynamic content data
  const content = {
    eng: {
      subTitle: "Human Resource",
      mainTitle: "Human Resource",
      paragraph: `
        [Recruitment Ongoing] Individual Meetings Regarding Acceptance of
        Technical Interns at the Embassy of Pakistan in Japan. The Embassy of
        Pakistan in Japan is holding individual meetings for those
        interested in accepting Pakistani technical interns. Target
        Audience: Cooperatives or companies considering accepting Pakistani
        technical interns. Location: Embassy of Pakistan in Japan (4-6-17
        Minami-Azabu, Minato-ku, Tokyo) and online for those from distant
        locations. The Embassy of Pakistan in Japan acts as a bridge between
        sending organizations and cooperatives and serves as the first
        contact point for those considering Pakistan. During the individual
        meetings, we listen to the needs of each cooperative and introduce
        suitable sending organizations. Contact Information: Embassy of
        Pakistan in Japan, Social Welfare Department. Address: 4-6-17
        Minami-Azabu, Minato-ku, Tokyo 106-0047. Phone Numbers: 03-3445-6813,
        03-5421-7741 (Japanese available; if difficult to connect, please
        email and we will call you back). E-mail: tokyocwa@gmail.com
        Pakistan, with a population of approximately 230 million (5th in the
        world) and an average age of 22 years, is full of young labor force.
        The country is actively sending workers abroad, mainly to the Gulf
        countries such as the UAE and Qatar. The development of these Middle
        Eastern countries owes much to the contributions of Pakistani
        construction workers. The strengths of Pakistani workers lie in
        their diligence derived from Islamic teachings, their speed in
        acquiring Japanese language skills due to their multilingual
        background, and their quick adaptation to the Japanese work
        environment due to their multicultural background. Interns who have
        already entered Japan have begun working across various regions and
        have received positive feedback from accepting companies.
      `,
      attachmentLink: "https://www.pakistanembassytokyo.com/sites/default/files/HP%E6%8E%B2%E8%BC%89_0.pdf",
      attachmentText: "Attachment Link"
    },
    jpn: {
      subTitle: "人材資源",
      mainTitle: "人材資源",
      paragraph: `
        【希望者募集中】駐日パキスタン大使館にて技能実習生受入れに関する個別ミーティング開催
        駐日パキスタン大使館では、パキスタン人技能実習生の受入れについて関心がある方を対象に、随時個別ミーティングを開催しております。
        対象：パキスタン人技能実習生の受入れを検討する協同組合又は受入企業
        場所：駐日パキスタン大使館（東京都港区南麻布４－６－１７）及び遠方の方はオンライン
        駐日パキスタン大使館は送出機関と協同組合の繋ぎ役を担っており、パキスタンをご検討の方のファーストコンタクト先となっております。個別ミーティングでは各協同組合のご要望を聞き、送出機関のご紹介をします。
        連絡先
        駐日パキスタン大使館　社会福祉部
        住所　　　〒106-0047東京都港区南麻布４－６－１７
        電話番号　03-3445-6813　03-5421-7741（日本語可、つながりにくい場合はEmailいただければ折り返します）
        E-mail　　tokyocwa@gmail.com
        パキスタンは人口約２億3,000万人(世界5位)で、平均年齢22歳と若い労働力に満ちております。労働者の海外送出も盛んで、UAEやカタールといった中東湾岸諸国を中心に長年送出しています。これらの中東諸国の発展は、パキスタン人建設労働者の功績が大きいです。
        パキスタン人労働者の強みは、イスラム教の教えからくる勤勉さ、多言語国家からくる日本語能力習得のスピード、多文化国家からくる日本の労働環境への適応の早さにあります。入国済の実習生は日本各地で就業を開始しており、既に受入企業からの良いフィードバックをもらっております。
      `,
      attachmentLink: "https://www.pakistanembassytokyo.com/sites/default/files/HP%E6%8E%B2%E8%BC%89_0.pdf",
      attachmentText: "添付リンク"
    }
  };

  const currentContent = language === "ENG" ? content.eng : content.jpn;

  return (
    <div>
      <section className="handpicked-post-area section__hover-line pt-75 pb-50">
        <div className="container">
          <div className="section__title-wrap mb-40">
            <div className="row align-items-end">
              <div className="col-sm-6">
                <div className="section__title">
                  <span className="section__sub-title">{currentContent.subTitle}</span>
                  <h3 className="section__main-title">{currentContent.mainTitle}</h3>
                </div>
              </div>
            </div>
          </div>
          <p className="responsive-paragraph">
            {currentContent.paragraph}
          </p>
          <div>
            <Link href={currentContent.attachmentLink} target="_blank">
              {currentContent.attachmentText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanResourceComponent;
