import KeyPersonal from "@/components/elements/KeyPersonal";
import Layout from "@/components/layout/Layout";
import Ambassdor from "@/components/slider/ambassdor";


import Link from "next/link";
import { useState } from "react";

export default function AboutUs() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} footerClass="black-bg">
        <section className="slider__area fix">
          <div className="container">
            <Ambassdor />
          </div>
        </section>
      <div>
        <KeyPersonal/>
      </div>
      </Layout>
    </>
  );
}
