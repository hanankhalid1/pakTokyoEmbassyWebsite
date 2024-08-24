import React from 'react'
import Layout from '@/components/layout/Layout'
import EvisaComponent from '@/components/elements/EvisaComponent';
import EconomyComponent from '@/components/elements/EconomyComponent';



const CounsularServiceFor = () => {
  return (
  <Layout headerStyle={2} footerStyle={1} footerClass="black-bg" >
    <EvisaComponent/>
    <EconomyComponent/>
  </Layout>
  )
}

export default CounsularServiceFor;
