import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
const pressEng = [
    {
      id: 1,
      imgSrc: "/assets/img/press/embNational.png",
      category: "Pakistan",
      author: "Tokyo Embassy",
      date: "Nov 22, 2022",
      title: "Embassy Hosts Reception on Pakistan National Day.",
      content: `A large number of Pakistani community and Japanese
                nationals belonging to the fields of media, academia,
                think tanks, businesses, government officials and
                private sector participated in the event. The Embassy
                showcased rich Pakistani culture and heritage to the
                audience. Ambassador Raza Bashir Tarar in his remarks
                highlighted the significance of 23rd March. He
                underscored the deep rooted Pakistan – Japan bilateral
                ties and efforts undertaken by the Embassy to further
                enhance them. He also emphasized the key role played by
                the Pakistan community in Japan and acting as a bridge
                between the two nations and playing their role in
                enhancing people to people exchanges.`,
      link: "/blog/1",
      readMore: "Read More"
    },
    {
      id: 2,
      imgSrc: "/assets/img/press/dayMark.png",
      category: "Pakistan",
      author: "Tokyo Embassy",
      date: "Nov 22, 2022",
      title: "Pakistan Day Celebrated at the Pakistan Embassy Tokyo",
      content: `Today, a traditional flag hoisting ceremony was held at
                the Pakistan Embassy Tokyo. The ceremony began with
                the recitation of the holy Quran and the national anthem
                of Pakistan. Ambassador Raza Bashir Tarar hoisted the
                flag and the anthem was played. The Ambassador read the
                message of Pakistan Day. Special supplements were published
                in leading English newspapers in Japan, and gatherings
                related to Pakistan Day were held by community groups in
                various regions of Japan.`,
      link: "/blog/2",
      readMore: "Read More"
    },
    {
      id: 3,
      imgSrc: "/assets/img/press/humanRes.png",
      category: "Pakistan",
      author: "Tokyo Embassy",
      date: "Nov 22, 2022",
      title: "Pakistan Embassy Tokyo Holds Seminar on Pakistani Talent in Aichi Prefecture",
      content: `The Pakistan Embassy Tokyo held a seminar on Pakistani
                talent in Aichi Prefecture to promote Pakistani human resources.
                Aichi Prefecture is a top prefecture in Japan for accepting foreign
                workers. The seminar was attended by many Japanese employers and
                Pakistani Overseas Employment Promoters (OEPs). Participants
                were informed about Pakistani talent and the state of labor shortage
                in Japan. The Vice President of JITCO gave a presentation on
                the situation of labor shortage in Japan and solutions. The Managing
                Director of OECP and other OEP representatives explained the
                preparations for sending trainees and skilled workers. The Ambassador
                emphasized the importance of Japanese language learning for the
                labor dispatch process. At the end of the seminar, participants exchanged
                contacts and further arrangements were made. The Embassy plans to
                collaborate with OECP and other OEPs to hold a Pakistani Talent Expo
                in the coming months.`,
      link: "/blog/3",
      readMore: "Read More"
    },
    {
      id: 4,
      imgSrc: "/assets/img/press/messFor.png",
      category: "Pakistan",
      author: "Tokyo Embassy",
      date: "Nov 22, 2022",
      title: "Message from the Foreign Minister of the Islamic Republic of Pakistan, Mohammad Ishaq Dar (March 23, 2024)",
      content: `On the occasion of Pakistan Day, I extend my heartfelt congratulations.
                Today, we honor the brave struggle of our ancestors and the adoption
                of the historic Pakistan Resolution of 1940 and the subsequent
                independence achieved. Pakistan was born in difficult circumstances.
                Our forefathers overcame all obstacles with courage and resolve. Today,
                as we celebrate this day, let us reflect on our collective journey
                since 1947, learn from our experiences, and reaffirm our commitment
                to a prosperous and united Pakistan. Reflecting on the pages of history,
                we remember the vision and resolve of our ancestors. The 1940 Pakistan
                Resolution was a turning point in establishing Pakistan on August 14,
                1947. Today, we pay tribute to the promises and sacrifices of Quaid-e-Azam
                Mohammad Ali Jinnah and his companions.`,
      link: "/blog/4",
      readMore: "Read More"
    },
    {
      id: 5,
      imgSrc: "/assets/img/press/messPresi.png",
      category: "Pakistan",
      author: "Tokyo Embassy",
      date: "Nov 22, 2022",
      title: "Message from the President of the Islamic Republic of Pakistan, Asif Ali Zardari (March 23, 2024)",
      content: `On this Pakistan Day, I extend my heartfelt congratulations and greetings.
                Today marks the day to commemorate the historic Pakistan Resolution of
                March 23, 1940, and the foundation laid for our beloved country and
                independent homeland. Let us reflect on our journey, celebrate our
                achievements, and reaffirm our commitment to a prosperous and united
                Pakistan. Looking back at the pages of history, we recall the vision
                and resolve of our ancestors. The 1940 Pakistan Resolution was a key
                turning point for the establishment of Pakistan on August 14, 1947.
                Today, we honor the promises and sacrifices of Quaid-e-Azam Mohammad
                Ali Jinnah and his companions.`,
      link: "/blog/5",
      readMore: "Read More"
    },
    {
      id: 6,
      imgSrc: "/assets/img/press/pakJapFest.png",
      category: "Pakistan",
      author: "Tokyo Embassy",
      date: "Nov 22, 2022",
      title: "Pakistan Embassy Tokyo Honors Organizers of the Pakistan-Japan Festival",
      content: `The Pakistan Embassy Tokyo held a ceremony to recognize and
                express gratitude to the efforts of the Pakistan-Japan Friends (PJF)
                who organized the Pakistan-Japan Festival in 2023. Ambassador Raza
                Bashir Tarar awarded certificates of appreciation to PJF members from
                the Pakistani and Japanese communities and corporate sponsors of the
                festival. The Ambassador highlighted the importance of cultural activities
                in deepening mutual understanding between the two countries. He expressed
                gratitude to PJF members and corporate sponsors for their role in promoting
                Pakistan’s rich cultural heritage and fostering people-to-people ties between
                Pakistan and Japan. The event was well attended and received positive
                feedback from both communities.`,
      link: "/blog/6",
      readMore: "Read More"
    }
  ];
  const pressJpn = [
    {
      id: 1,
      imgSrc: "/assets/img/press/embNational.png",
      category: "パキスタン",
      author: "東京大使館",
      date: "2022年11月22日",
      title: "パキスタン国民の日における大使館のレセプション開催",
      content: `多くのパキスタンコミュニティおよび日本のメディア、学術、
                シンクタンク、ビジネス、政府関係者、民間部門の人々が
                イベントに参加しました。大使館は、観客にパキスタンの豊かな文化と
                遺産を披露しました。ラザ・バシール・タラール大使は、23日3月の意義を
                強調し、パキスタン-日本間の深い関係と大使館によるさらなる強化の努力を
                強調しました。また、日本のパキスタンコミュニティが両国の橋渡し役として
                重要な役割を果たし、人と人との交流を促進していることに言及しました。`,
      link: "/blog/1",
      readMore: "続きを読む"
    },
    {
      id: 2,
      imgSrc: "/assets/img/press/dayMark.png",
      category: "パキスタン",
      author: "東京大使館",
      date: "2022年11月22日",
      title: "パキスタンデーが在東京パキスタン大使館で記念されました",
      content: `今日は、在東京パキスタン大使館で伝統的な風習に則った
                儀式的な国旗掲揚式が行われました。式典は、聖典の朗読と
                パキスタンの国家によって始まりました。ラザ・バシール・タラール大使は
                国旗を掲げ、国家が演奏されました。大使は、パキスタンデーのメッセージを
                読み上げました。日本の主要な英字新聞に特別な補足が掲載され、
                パキスタンデーに関連する集まりが日本のさまざまな地域で
                コミュニティグループによっても行われました。`,
      link: "/blog/2",
      readMore: "続きを読む"
    },
    {
      id: 3,
      imgSrc: "/assets/img/press/humanRes.png",
      category: "パキスタン",
      author: "東京大使館",
      date: "2022年11月22日",
      title: "愛知県でのパキスタン人材セミナー開催",
      content: `在東京パキスタン大使館は、パキスタンの人材を促進するために
                愛知県でセミナーを開催しました。愛知県は、日本で外国人労働者を
                受け入れる主要な県です。セミナーには、多くの日本の雇用者と
                パキスタンの海外雇用促進者（OEP）が参加しました。参加者には
                パキスタンの人材と日本の労働力不足の状況について情報が提供されました。
                JITCOの副会長が日本の労働力不足の状況と解決策についてプレゼンテーションを行いました。
                OECPのマネージングディレクターと他のOEP代表が研修生や熟練工の派遣準備について説明しました。
                大使は、労働派遣プロセスにおける日本語学習の重要性を強調しました。セミナーの最後に、
                参加者は連絡先を交換し、さらなる手配が行われました。大使館は、OECPや他のOEPとの
                協力により、今後数ヶ月でパキスタン人材エキスポを開催する予定です。`,
      link: "/blog/3",
      readMore: "続きを読む"
    },
    {
      id: 4,
      imgSrc: "/assets/img/press/messFor.png",
      category: "パキスタン",
      author: "東京大使館",
      date: "2022年11月22日",
      title: "パキスタン・イスラム共和国外務大臣モハマド・イシャク・ダールからのメッセージ（2024年3月23日）",
      content: `パキスタンデーの機会に、心からのお祝いを申し上げます。
                今日は、1940年の歴史的なパキスタン決議とその後の独立を
                記念する日です。パキスタンは困難な状況で誕生しました。
                私たちの先祖は、勇気と決意をもってすべての障害を克服しました。
                今日、この日を祝うにあたり、1947年以来の私たちの共同の歩みを
                振り返り、経験から学び、繁栄し団結したパキスタンへの
                コミットメントを再確認しましょう。歴史のページを振り返ると、
                先祖のビジョンと決意を思い起こします。1940年のパキスタン決議は、
                1947年8月14日にパキスタンを確立するための重要な転換点でした。
                今日、クアイード・エ・アザム・モハマド・アリー・ジンナーと
                その仲間たちの約束と犠牲を称えます。`,
      link: "/blog/4",
      readMore: "続きを読む"
    },
    {
      id: 5,
      imgSrc: "/assets/img/press/messPresi.png",
      category: "パキスタン",
      author: "東京大使館",
      date: "2022年11月22日",
      title: "パキスタン・イスラム共和国大統領アシフ・アリ・ザルダリからのメッセージ（2024年3月23日）",
      content: `このパキスタンデーに、心からのお祝いとご挨拶を申し上げます。
                今日は、1940年3月23日の歴史的なパキスタン決議と、私たちの愛する
                国と独立した故郷の基盤を記念する日です。私たちの歩みを振り返り、
                成し遂げた成果を祝うとともに、繁栄し団結したパキスタンへの
                コミットメントを再確認しましょう。歴史のページを振り返ると、
                先祖のビジョンと決意が思い起こされます。1940年のパキスタン決議は、
                1947年8月14日にパキスタンを設立するための重要な転換点でした。
                今日、クアイード・エ・アザム・モハマド・アリー・ジンナーと
                その仲間たちの約束と犠牲を称えます。`,
      link: "/blog/5",
      readMore: "続きを読む"
    },
    {
      id: 6,
      imgSrc: "/assets/img/press/pakJapFest.png",
      category: "パキスタン",
      author: "東京大使館",
      date: "2022年11月22日",
      title: "パキスタン・ジャパンフェスティバルの主催者を称える在東京パキスタン大使館",
      content: `在東京パキスタン大使館は、2023年に開催されたパキスタン・ジャパンフェスティバルを
                主催したパキスタン・ジャパンフレンズ（PJF）の努力を認め、感謝の意を表す式典を開催しました。
                大使ラザ・バシール・タラールは、パキスタンおよび日本コミュニティのPJFメンバーとフェスティバルの
                企業スポンサーに感謝状を授与しました。大使は、両国間の相互理解を深めるための文化的活動の
                重要性を強調しました。パキスタンの豊かな文化遺産を促進し、パキスタンと日本の人と人とのつながりを
                深める役割を果たしたPJFメンバーと企業スポンサーに感謝の意を表しました。イベントはよく参加され、
                両コミュニティから好意的なフィードバックが寄せられました。`,
      link: "/blog/6",
      readMore: "続きを読む"
    }
  ];
  

  
  

const PressRelaeseComponent = () => {
    const { language } = useLanguage();
    const currentData = language === "ENG" ? pressEng : pressJpn;
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
                <Link href="/blog">{post.category}</Link>
              </li>
              <li>
                <span className="by">By</span>{" "}
                <Link href="/blog">{post.author}</Link>
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
               {post.readMore} <i className="far fa-long-arrow-right" />
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

export default PressRelaeseComponent
