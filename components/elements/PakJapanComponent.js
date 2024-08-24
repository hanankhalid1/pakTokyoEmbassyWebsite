import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

// Define the data for English and Japanese
const pakJapanEng = {
  img: "pakJapan.jpg",
  category: "Pakistan",
  author: "Tokyo Embassy",
  date: "Nov 22, 2022",
  title: "Brief History of Pakistan-Japan Bilateral Relations",
  content: `Historical links between the peoples of the two countries date back to pre-historic times. Around 1930, a chair for Urdu language was established in Tokyo University and Takushoku University. Since then, the research on Urdu language and on people of the region started in Japan. Since the creation of Pakistan in 1947, the two countries enjoyed cordial and friendly relations. At the 1951 San Francisco Peace Conference, Pakistan was the only major country invited from South Asia (as China was not invited, and India and Burma stayed away from the Conference for their own reasons). At the conference, Pakistan delegation led by Foreign Minister Sir. Zafarullah Khan strongly argued for treating Japan with respect. Sir Zafarullah made a historical speech noting that "The peace with Japan should be a premised on justice and reconciliation, not on vengeance and oppression. In future Japan would play an important role as a result of the series of reforms initiated in the political and social structure of Japan which hold out a bright promise of progress and which qualify Japan to take place as an equal in the fellowship of peace loving nations". Since the establishment of diplomatic relations on 28th April 1952, Pakistan-Japan relations have steadily progressed. Soon after the San Francisco Peace Conference, Pakistan was one of the very few countries which opened their commercial office in Japan. Similarly, Japan opened one of its earliest trade offices in Karachi. In 1952, Pakistan opened its Embassy in Tokyo. Mr. Mian Ziauddin became the first Ambassador of Pakistan to Japan. In early 50's Pakistan was a major import destination for raw cotton for Japan. During the Korean War and in the Cold War, Pakistan and Japan found themselves on the same side of the divide. President Ayub Khan visited Japan in 1960. That was followed by Prime Minister Ike's visit to Pakistan in 1961. During the latter's visit, agreement to start two projects on Yen Credits and Transferring Students were concluded. Accordingly, 80 Pakistani students were transferred to Japan, mainly to Chiba University where they acquired Japanese language training and technology skills. YEN Credits was established to deepen trading and economic relationship. According to the YEN Credit contract, Japan accepted long repayment periods, and Pakistan only bought Japanese products. It was aimed to achieve two purposes, for Pakistan good products were available at discounted price, and for Japan, its products were introduced in Pakistani and other Muslim countries' markets. The two agreements not only brought Pakistan the new technology and skills to use Japanese products but also established strong connectivity between Pakistan and Japan. In the 1980’s bilateral relations were further bolstered due to Pakistan’s role in securing the withdrawal of the Soviet forces from Afghanistan and the sea lanes security through which Japan receives bulk of its oil. Although the bilateral relations saw a difficult phase following the nuclear tests conducted by Pakistan in 1998, the engagement at the political level continued. The August 2000 visit to Pakistan by Prime Minister Yoshiro Mori signaled Japan’s desire to continue highest-level engagement with Pakistan. President Pervez Musharraf also visited Japan in 2000. Since 2001, Japan has also been highly appreciative of Pakistan’s vital role in the war against terrorism. It extended humanitarian assistance to Pakistan in the wake of 2005 earthquake. During the visit of Japanese Prime Minister Junichiro Koizumi to Pakistan on 30 April -1st May 2005, Pakistan-Japan Joint Declaration entitled “Pakistan-Japan at a new frontier; towards a renewed, enhanced and robust relationship” was signed. Prime Minister Shaukat Aziz visited Japan in August 2005. Japan welcomed the 2007 return of democracy in Pakistan. It not only hosted the Friends of Democratic Pakistan and Donors’ Conference in Tokyo in April 2009, but also pledged US$1 billion at the Conference. Japan has also come forward to assist Pakistan in its flood relief and rescue operations. It announced contributions for flood relief and rehabilitation efforts at the Pakistan Development Forum on 14-15 November 2010. During the visit of President Asif Ali Zardari to Japan in 21-23 February 2011, the two sides signed the Joint Statement on Japan-Pakistan Comprehensive Partnership. President Dr. Arif Alvi has attended the Enthronement Ceremony of the Emperor of Japan Naruhito in October 2019.`,
};

const pakJapanJpn = {
  img: "pakJapan_jp.jpg",
  category: "パキスタン",
  author: "東京大使館",
  date: "2022年11月22日",
  title: "パキスタン・日本関係の簡単な歴史",
  content: `両国の人々の歴史的なつながりは、先史時代にさかのぼります。 1930年頃、東京大学と拓殖大学にウルドゥー語の椅子が設立されました。それ以来、日本ではウルドゥー語や地域の人々に関する研究が始まりました。 1947年にパキスタンが設立されて以来、両国は親密で友好的な関係を享受してきました。 1951年サンフランシスコ平和会議では、パキスタンは南アジアから唯一招待された主要国でした（中国は招待されず、インドとビルマはそれぞれの理由で会議から離れました）。 会議では、パキスタン代表団が外務大臣ザファルラ・カーン氏の指導のもと、日本に対する尊重を求めました。 ザファルラ氏は「日本との平和は復讐や抑圧ではなく、公正と和解に基づくべきだ」と歴史的な演説を行いました。 今後、日本は日本の政治と社会構造の改革の一連の結果として重要な役割を果たすことになり、平和を愛する国々の仲間として平等な地位を占める資格があるという明るい進展を約束しました。 1952年4月28日に外交関係が樹立されて以来、パキスタン・日本関係は着実に進展しています。 サンフランシスコ平和会議直後、パキスタンは日本に商業オフィスを開設した非常に少数の国の1つでした。 同様に、日本はカラチに最も早く貿易オフィスを開設しました。 1952年にパキスタンは東京に大使館を開設しました。 ミアン・ジアウディン氏がパキスタンの初代駐日大使となりました。 1950年代初頭、パキスタンは日本にとって主要な生綿の輸入先でした。 朝鮮戦争と冷戦の間、パキスタンと日本は同じ側に立っていました。 アイユーブ・カーン大統領は1960年に日本を訪問しました。 それに続いて、1961年にパキスタンを訪問したアイク首相がいました。 後者の訪問中に、円借款と学生交換に関する2つのプロジェクトを開始する契約が締結されました。 それにより、80人のパキスタンの学生が日本に転校し、主に千葉大学で日本語の教育と技術スキルを習得しました。 円借款は貿易と経済関係を深めるために設立されました。 円借款契約によれば、日本は長期の返済期間を受け入れ、パキスタンは日本製品のみを購入しました。 これは、パキスタンにとって良い製品を割引価格で入手できることと、日本にとっては製品がパキスタンおよび他のイスラム諸国の市場に紹介されることを目的としています。 この2つの契約により、パキスタンは日本製品を使用するための新しい技術とスキルを手に入れるだけでなく、パキスタンと日本の間に強いコネクティビティが確立されました。 1980年代には、パキスタンがアフガニスタンからソビエト軍を撤退させる役割を果たし、日本が石油の大部分を受け取る海上輸送路の安全保障により、二国間関係がさらに強化されました。 1998年のパキスタンによる核実験後、二国間関係には困難な時期がありましたが、政治レベルでの関与は続きました。 2000年8月にパキスタンを訪問した日本の小泉純一郎首相は、日本がパキスタンとの最高レベルの関与を続けたいとの意向を示しました。 パキスタンのアシフ・アリ・ザルダリ大統領が2011年2月21日から23日まで日本を訪問しました。 2国間関係はさらなる発展を遂げ、2022年にはアリフ・アルヴィ大統領が日本の天皇即位式に出席しました。`,
};

const PakJapanComponent = () => {
  const { language } = useLanguage();
  const currentData = language === "ENG" ? pakJapanEng : pakJapanJpn;

  return (
    <div>
      <section className="blog-details-area pt-80 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-1">
              <div className="blog-details-social">
                <ul className="list-wrap">
                  <li>
                    <Link href="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-behance" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fas fa-share" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="blog-post-wrapper">
                <div className="latest__post-item">
                  <div className="latest__post-thumb tgImage__hover">
                    <Link href="#">
                      <img src="/assets/img/kashmir/pakJapan.jpg" alt="img" />
                    </Link>
                  </div>
                  <div className="latest__post-content">
                    <ul className="tgbanner__content-meta list-wrap">
                      <li className="category">
                        <Link href="#">{currentData.category}</Link>
                      </li>
                      <li>
                        <span className="by">By</span>{" "}
                        <Link href="#">{currentData.author}</Link>
                      </li>
                      <li>{currentData.date}</li>
                    </ul>
                    <h3 className="title tgcommon__hover">
                      <Link href="#">{currentData.title}</Link>
                    </h3>
                    <p>{currentData.content}</p>
                    <div className="latest__post-read-more">
                      <Link href="#">
                        Read More <i className="far fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="pagination__wrap">
                  <ul className="list-wrap">
                    <li className="active">
                      <Link href="#">01</Link>
                    </li>
                    <li>
                      <Link href="#">02</Link>
                    </li>
                    <li>
                      <Link href="#">...</Link>
                    </li>
                    <li>
                      <Link href="#">06</Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fas fa-angle-double-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              {/* Empty column or additional content */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PakJapanComponent;
