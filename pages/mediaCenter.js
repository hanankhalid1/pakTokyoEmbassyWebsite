import BlogSidebar from "@/components/elements/BlogSidebar";
import KashmirComponent from "@/components/elements/KashmirComponent";
import Layout from "@/components/layout/Layout";
import PopularSlider2 from "@/components/slider/PopularSlider2";
import data from "@/util/blogData";
import Link from "next/link";

export default function MediaCenter() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} footerClass="black-bg" logoWhite>
       <KashmirComponent/>
        <section className="popular__post-area lifestyle__popular-area white-bg section__hover-line pt-75 pb-75">
          <div className="container">
            <div className="section__title-wrap mb-40">
              <div className="row align-items-end">
                <div className="col-sm-6">
                  <div className="section__title">
                    <span className="section__sub-title">Popular</span>
                    <h3 className="section__main-title">Popular Post</h3>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="section__read-more text-start text-sm-end">
                    <Link href="/blog">
                      More Popular Post{" "}
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="trending__slider">
              <div className="swiper-container popular-active">
                <PopularSlider2 />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
