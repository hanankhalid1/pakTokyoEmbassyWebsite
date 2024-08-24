import React from "react";
import Link from "next/link";
import data from "@/util/blogData";
import links from "@/components/elements/links";
import Layout from "@/components/layout/Layout";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import dataJpn from "@/util/dataJpn";
import Links from "@/components/elements/links";

const ImpLinks = () => {
  const { language } = useLanguage();
  console.log("language", language);
  const currentData = language === "ENG" ? data : dataJpn;
  console.log( currentData);

  return (
   
      <Layout headerStyle={2} footerStyle={2} footerClass="black-bg">
    <Links/>
    </Layout>
   
    
  );
};

export default ImpLinks;
