import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import React from "react";
// Remove the incorrect import statement
// import MinimalIsotope2 from "../components/elements/MinimalIsotop2";

const MinimalIsotope3 = dynamic(
  () => import("@/components/elements/MinimalIsotope3"),
  {
    ssr: false,
  }
);

const HistoricPlaces = () => {
  return (
    <Layout headerStyle={2} footerStyle={2} footerClass="black-bg">
      <MinimalIsotope3 />
    </Layout>
  );
};

export default HistoricPlaces;
