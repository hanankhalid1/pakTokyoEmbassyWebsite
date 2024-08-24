import Layout from "@/components/layout/Layout";
import InteriroSlider from "@/components/slider/InteriroSlider";
import PopularSlider from "@/components/slider/PopularSlider";
import TrendingSlider from "@/components/slider/TrendingSlider";
import NftSlider from "@/components/slider/NftSlider";
import Marquee from "react-fast-marquee";
import data from "@/util/blogData";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import TrendingSlider1 from "@/components/slider/TrendingSlider1";
import dataJpn from "@/util/dataJpn";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import NorthComponent from "@/components/elements/northComponent";
import CityComponent from "@/components/elements/CitiesComponent";
import HistoryComponent from "@/components/elements/historyComponent";
import MountainComponent from "@/components/elements/MountainComponent";
import FestivalComponent from "@/components/elements/FestivalComponent";
import Links from "@/components/elements/links";
import ShowLinks from "@/components/elements/ShowLinks";
import ServiceComponent from "@/components/elements/ServiceComponent";
import NewsLetterComponent from "@/components/elements/NewsLetterComponent";
import SectionTitle from "@/components/elements/sectionTitle";
import VideoComponentHeading from "@/components/elements/VideoComponentHeading";
import DynamicVideoPosts from "@/components/elements/DynamicVideoPost";
export default function Home2() {
  const { language } = useLanguage();
  const currentData = language === "ENG" ? data : dataJpn;

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Layout headerStyle={2} footerStyle={2} footerClass="black-bg">
        <section className="slider__area fix">
          <div className="container">
            <InteriroSlider />
          </div>
        </section>
        <section className="popular__post-area white-bg section__hover-line pt-75 pb-75">
          <div className="container">
            <div className="trending__slider">
              <div className="swiper-container popular-active">
                <PopularSlider />
              </div>
            </div>
          </div>
        </section>
        <section className="category__area section__hover-line pt-75">
          <div className="container">
            <div>
              <ServiceComponent/>
            </div>
          </div>
        </section>
        <div className="advertisement pt-80">
          <div className="container">
            <div className="col-12 ">
              <div className="advertisement__image text-center">
                <Link href="#">
                  <img
                    src="/assets/img/logo/EmbassyLogo.png"
                    alt="advertisement"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section className="trending-post-area section__hover-line pt-75 pb-80">
          <div className="container">
            <div className="trending__slider">
              <div className="swiper-container trending-active">
                <TrendingSlider1 showItem={4} />
              </div>
            </div>
          </div>
        </section>
        <section className="video-post-area section__hover-line white-bg pt-75 pb-80">
          <div className="container">
         <VideoComponentHeading/>
           <DynamicVideoPosts/>
          </div>
        </section>
        <section className="featured-post-area section__hover-line pt-75">
         
          <div className="container">
           <div>
            <ShowLinks/>
            </div> 
          </div>
        </section>
        <section
          className="slider__area slider__style-two fix"
          style={{ backgroundImage: 'url("")' }}
        >
          <div className="container">
            <div className="slider-active">
              <NftSlider />
            </div>
            <div className="marquee_mode"></div>
          </div>
        </section>
        <section className="handpicked-post-area section__hover-line pt-75 pb-50">
          <div className="container">
          <SectionTitle section="tourism" />
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
              <NorthComponent/>
              </div>
              <div className="col-xl-6">
                <div className="handpicked__sidebar-post">
                  <div className="row">
                    <div className="col-xl-6 col-lg-4 col-md-6">
                    <CityComponent/>
                    </div>

                    <div className="col-xl-6 col-lg-4 col-md-6">
                     <HistoryComponent/>
                    </div>

                    <div className="col-xl-6 col-lg-4 col-md-6">
                      <MountainComponent/>
                    </div>

                    <div className="col-xl-6 col-lg-4 col-md-6">
                     <FestivalComponent/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="trending-post-area section__hover-line pt-75 pb-80">
          <div className="container">
            <div className="trending__slider">
              <div className="swiper-container trending-active">
                <TrendingSlider showItem={4} />
              </div>
            </div>
          </div>
        </section>
        <section className="newsletter-style-two black-bg pt-80 pb-80">
         <NewsLetterComponent/>
        </section>
      </Layout>
    </>
  );
}
