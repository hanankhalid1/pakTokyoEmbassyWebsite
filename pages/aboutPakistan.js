import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import React from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
// Remove the incorrect import statement
// import MinimalIsotope2 from "../components/elements/MinimalIsotop2";

const MinimalIsotope6 = dynamic(
  () => import("@/components/elements/MinimalIsotope6"),
  {
    ssr: false,
  } 
);

const AboutPakistan = () => {
  return (
    <LanguageProvider>
<Layout headerStyle={2} footerStyle={2} footerClass="black-bg">
      <MinimalIsotope6 />
    </Layout>
    </LanguageProvider>
    
  );
};

export default AboutPakistan;
