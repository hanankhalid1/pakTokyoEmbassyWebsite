import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
const NewsEng = [
    {
      id: 1,
      imgSrc: "/assets/img/minimal/embassyClose.jpg",
      category: "technology",
      author: "alonso d.",
      date: "nov 22, 2022",
      title: "Notice for General Public: The Embassy will remain closed from 15 July to 16 July, 2024",
      content: "In partnership with Sydney startup Trace, Envato is delivering on its sustainability promise as a B-Corp and meeting part of its recent commitment to the To Whom It Should Concern campaign. Envato is now officially carbon commitment, as part of a comprehensive new sustainability.",
      readMoreBtn : "Read More"
    },
    {
      id: 2,
      imgSrc: "/assets/img/minimal/1719.jpg",
      category: "technology",
      author: "alonso d.",
      date: "nov 22, 2022",
      title: "Notice for General Public: The Embassy will remain closed from 17 June to 19 June, 2024",
      content: "In partnership with Sydney startup Trace, Envato is delivering on its sustainability promise as a B-Corp and meeting part of its recent commitment to the To Whom It Should Concern campaign. Envato is now officially carbon commitment, as part of a comprehensive new sustainability.",
      readMoreBtn : "Read More"
    },
    {
      id: 3,
      imgSrc: "/assets/img/minimal/apr29.jpg",
      category: "technology",
      author: "alonso d.",
      date: "nov 22, 2022",
      title: "Notice for General Public: The Embassy will remain closed on April 29 (Monday) May 03 (Friday) & May 06 (Monday)",
      content: "In partnership with Sydney startup Trace, Envato is delivering on its sustainability promise as a B-Corp and meeting part of its recent commitment to the To Whom It Should Concern campaign. Envato is now officially carbon commitment, as part of a comprehensive new sustainability.",
      readMoreBtn : "Read More"
    },
    {
      id: 4,
      imgSrc: "/assets/img/minimal/embassyClose1011.jpg",
      category: "technology",
      author: "alonso d.",
      date: "nov 22, 2022",
      title: "Notice for General Public: The Embassy will remain closed from 10-11 April, 2024.",
      content: "In partnership with Sydney startup Trace, Envato is delivering on its sustainability promise as a B-Corp and meeting part of its recent commitment to the To Whom It Should Concern campaign. Envato is now officially carbon commitment, as part of a comprehensive new sustainability.",
      readMoreBtn : "Read More"
    },
    {
      id: 5,
      imgSrc: "/assets/img/minimal/embassyClose1516.jpg",
      category: "technology",
      author: "alonso d.",
      date: "nov 22, 2022",
      title: "Notice for General Public: Embassy will remain closed on 15 & 16 July 2024.",
      content: "In partnership with Sydney startup Trace, Envato is delivering on its sustainability promise as a B-Corp and meeting part of its recent commitment to the To Whom It Should Concern campaign. Envato is now officially carbon commitment, as part of a comprehensive new sustainability.",
      readMoreBtn : "Read More"
    },
    {
      id: 6,
      imgSrc: "/assets/img/minimal/embassyRamazan.jpg",
      category: "technology",
      author: "alonso d.",
      date: "nov 22, 2022",
      title: "Notice for General Public: The Embassy will observe the following timings during the Holy month of Ramadan",
      content: "In partnership with Sydney startup Trace, Envato is delivering on its sustainability promise as a B-Corp and meeting part of its recent commitment to the To Whom It Should Concern campaign. Envato is now officially carbon commitment, as part of a comprehensive new sustainability.",
      readMoreBtn : "Read More"
    },
    {
      id: 7,
      imgSrc: "/assets/img/minimal/employOpport.jpg",
      category: "technology",
      author: "alonso d.",
      date: "nov 22, 2022",
      title: "EMPLOYMENT OPPORTUNITY",
      content: "In partnership with Sydney startup Trace, Envato is delivering on its sustainability promise as a B-Corp and meeting part of its recent commitment to the To Whom It Should Concern campaign. Envato is now officially carbon commitment, as part of a comprehensive new sustainability.",
      readMoreBtn : "Read More"
    }
  ];
  const NewsJp = [
    {
      id: 1,
      imgSrc: "/assets/img/minimal/embassyClose.jpg",
      category: "技術",
      author: "アロンソ・D",
      date: "2022年11月22日",
      title: "一般市民へのお知らせ: 大使館は2024年7月15日から7月16日まで休館します",
      content: "シドニーのスタートアップTraceとのパートナーシップにより、EnvatoはB-Corpとしての持続可能性の約束を果たし、最近のTo Whom It Should Concernキャンペーンへのコミットメントの一環を達成しています。Envatoは現在、包括的な新しい持続可能性の一環として公式にカーボンコミットメントを取得しています。",
      readMoreBtn: "もっと読む"

    },
    {
      id: 2,
      imgSrc: "/assets/img/minimal/1719.jpg",
      category: "技術",
      author: "アロンソ・D",
      date: "2022年11月22日",
      title: "一般市民へのお知らせ: 大使館は2024年6月17日から6月19日まで休館します",
      content: "シドニーのスタートアップTraceとのパートナーシップにより、EnvatoはB-Corpとしての持続可能性の約束を果たし、最近のTo Whom It Should Concernキャンペーンへのコミットメントの一環を達成しています。Envatoは現在、包括的な新しい持続可能性の一環として公式にカーボンコミットメントを取得しています。",
      readMoreBtn: "もっと読む"

    },
    {
      id: 3,
      imgSrc: "/assets/img/minimal/apr29.jpg",
      category: "技術",
      author: "アロンソ・D",
      date: "2022年11月22日",
      title: "一般市民へのお知らせ: 大使館は4月29日（月）、5月3日（金）、5月6日（月）に休館します",
      content: "シドニーのスタートアップTraceとのパートナーシップにより、EnvatoはB-Corpとしての持続可能性の約束を果たし、最近のTo Whom It Should Concernキャンペーンへのコミットメントの一環を達成しています。Envatoは現在、包括的な新しい持続可能性の一環として公式にカーボンコミットメントを取得しています。",
      readMoreBtn: "もっと読む"

    },
    {
      id: 4,
      imgSrc: "/assets/img/minimal/embassyClose1011.jpg",
      category: "技術",
      author: "アロンソ・D",
      date: "2022年11月22日",
      title: "一般市民へのお知らせ: 大使館は2024年4月10日から4月11日まで休館します。",
      content: "シドニーのスタートアップTraceとのパートナーシップにより、EnvatoはB-Corpとしての持続可能性の約束を果たし、最近のTo Whom It Should Concernキャンペーンへのコミットメントの一環を達成しています。Envatoは現在、包括的な新しい持続可能性の一環として公式にカーボンコミットメントを取得しています。",
      readMoreBtn: "もっと読む"

    },
    {
      id: 5,
      imgSrc: "/assets/img/minimal/embassyClose1516.jpg",
      category: "技術",
      author: "アロンソ・D",
      date: "2022年11月22日",
      title: "一般市民へのお知らせ: 大使館は2024年7月15日と16日に休館します。",
      content: "シドニーのスタートアップTraceとのパートナーシップにより、EnvatoはB-Corpとしての持続可能性の約束を果たし、最近のTo Whom It Should Concernキャンペーンへのコミットメントの一環を達成しています。Envatoは現在、包括的な新しい持続可能性の一環として公式にカーボンコミットメントを取得しています。",
      readMoreBtn: "もっと読む"

    },
    {
      id: 6,
      imgSrc: "/assets/img/minimal/embassyRamazan.jpg",
      category: "技術",
      author: "アロンソ・D",
      date: "2022年11月22日",
      title: "一般市民へのお知らせ: 大使館はラマダンの聖なる月に以下の時間を観察します",
      content: "シドニーのスタートアップTraceとのパートナーシップにより、EnvatoはB-Corpとしての持続可能性の約束を果たし、最近のTo Whom It Should Concernキャンペーンへのコミットメントの一環を達成しています。Envatoは現在、包括的な新しい持続可能性の一環として公式にカーボンコミットメントを取得しています。",
      readMoreBtn: "もっと読む"

    },
    {
      id: 7,
      imgSrc: "/assets/img/minimal/employOpport.jpg",
      category: "技術",
      author: "アロンソ・D",
      date: "2022年11月22日",
      title: "雇用機会",
      content: "シドニーのスタートアップTraceとのパートナーシップにより、EnvatoはB-Corpとしての持続可能性の約束を果たし、最近のTo Whom It Should Concernキャンペーンへのコミットメントの一環を達成しています。Envatoは現在、包括的な新しい持続可能性の一環として公式にカーボンコミットメントを取得しています。",
      readMoreBtn: "もっと読む"

    }
  ];
  
  

const NewsDetailComponent = () => {
    const { language } = useLanguage();
    const currentData = language === "ENG" ? NewsEng : NewsJp;
  return (
    <div>
         <div className="blog-post-wrapper">
      {currentData.slice(0, 6).map(post => (
        <div key={post.id} className="latest__post-item">
          <div className="latest__post-thumb tgImage__hover">
            <Link href={`/news/${post.id}`}>
              <img src={post.imgSrc} alt="img" />
            </Link>
          </div>
          <div className="latest__post-content">
            <ul className="tgbanner__content-meta list-wrap">
              <li className="category">
                <Link href="/news">{post.category}</Link>
              </li>
              <li>
                <span className="by">By</span>{" "}
                <Link href="/news">{post.author}</Link>
              </li>
              <li>{post.date}</li>
            </ul>
            <h3 className="title tgcommon__hover">
              <Link href={`/news/${post.id}`}>
                {post.title}
              </Link>
            </h3>
            <p>
              {post.content}
            </p>
            <div className="latest__post-read-more">
              <Link href={`/news/${post.id}`}>
               {post.readMoreBtn} <i className="far fa-long-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      ))}
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
  )
}

export default NewsDetailComponent
