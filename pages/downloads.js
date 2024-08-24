import DownloadComponent from "@/components/elements/DownloadComponent";
import Layout from "@/components/layout/Layout";
import React from "react";

const Downloads = () => {
  return (
    <Layout headerStyle={2} footerStyle={1} footerClass="black-bg">
     <DownloadComponent/>
    </Layout>
  );
};

export default Downloads;
