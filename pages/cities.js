import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import React from "react";
// Remove the incorrect import statement
// import MinimalIsotope2 from "../components/elements/MinimalIsotop2";

const MinimalIsotope2 = dynamic(
  () => import("@/components/elements/MinimalIsotope2"),
  {
    ssr: false,
  }
);

const Cities = () => {
  return (
    <Layout headerStyle={2} footerStyle={2} footerClass="black-bg">
      <MinimalIsotope2 />
    </Layout>
  );
};

export default Cities;
