import dynamic from 'next/dynamic';
import Layout from "@/components/layout/Layout";
import React from "react";

const MinimalIsotope = dynamic(() => import('@/components/elements/MinimalIsotope'), {
  ssr: false,
});

const Tourism = () => {
  return (
    <Layout headerStyle={2} footerStyle={2} footerClass="black-bg">
      <MinimalIsotope />
    </Layout>
  );
};

export default Tourism;
