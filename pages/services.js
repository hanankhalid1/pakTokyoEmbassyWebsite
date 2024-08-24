import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import React from "react";
// Remove the incorrect import statement
// import MinimalIsotope2 from "../components/elements/MinimalIsotop2";

const MinimalIsotope7 = dynamic(
  () => import("@/components/elements/MinimalIsotope7"),
  {
    ssr: false,
  }
);

const Services = () => {
  return (
    <Layout headerStyle={2} footerStyle={2} footerClass="black-bg" breadcrumbCategory= "Category" breadcrumbPostTitle= "Services">
      <MinimalIsotope7 />
    </Layout>
  );
};

export default Services;
