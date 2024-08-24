import UpcommingComponent from '@/components/elements/UpcommingComponent'
import React from 'react';
import Layout from '@/components/layout/Layout';


const upcommingEvent = () => {
  return (
    <Layout headerStyle={2} footerStyle={1} footerClass="black-bg" logoWhite>
    <UpcommingComponent/>
  </Layout>
  )
}

export default upcommingEvent
