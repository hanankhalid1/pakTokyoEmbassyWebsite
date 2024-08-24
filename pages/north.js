import dynamic from 'next/dynamic';
import Layout from "@/components/layout/Layout";
import React from "react";
import { LanguageProvider } from '@/contexts/LanguageContext';


const MinimalIsotope1 = dynamic(() => import('@/components/elements/MinimalIsotope1'), {
  ssr: false,
});

const North = () => {
  return (
<LanguageProvider>
<Layout headerStyle={2} footerStyle={2} footerClass="black-bg">
      <MinimalIsotope1 />
    </Layout>
</LanguageProvider>
  
  );
};

export default North;
