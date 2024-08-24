import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import EconomyComponent from "@/components/elements/EconomyComponent";

const Economy = () => {
  return (
    <Layout headerStyle={2} footerStyle={1} footerClass="black-bg">
      <EconomyComponent/>
     
    </Layout>
  );
};

export default Economy;
