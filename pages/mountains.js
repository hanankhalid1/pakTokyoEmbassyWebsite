import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import React from "react";

// Remove the incorrect import statement
// import MinimalIsotope2 from "../components/elements/MinimalIsotop2";

const MinimalIsotope4 = dynamic(
  () => import("@/components/elements/MinimalIsotope4"),
  {
    ssr: false,
  }
);

const Mountains = () => {
  return (
    <Layout headerStyle={2} footerStyle={2} footerClass="black-bg">
      <MinimalIsotope4 />
    </Layout>
  );
};

export default Mountains;
