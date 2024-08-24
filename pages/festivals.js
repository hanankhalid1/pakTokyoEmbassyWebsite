import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import React from "react";
// Remove the incorrect import statement
// import MinimalIsotope2 from "../components/elements/MinimalIsotop2";

const MinimalIsotope5 = dynamic(
  () => import("@/components/elements/MinimalIsotope5"),
  {
    ssr: false,
  }
);

const Festivals = () => {
  return (
    <Layout headerStyle={2} footerStyle={2} footerClass="black-bg">
      <MinimalIsotope5 />
    </Layout>
  );
};

export default Festivals;
