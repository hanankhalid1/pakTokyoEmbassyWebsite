import React from 'react'
import Layout from '@/components/layout/Layout'
import ImmigrationControlComponent from '@/components/elements/JpnImmingrationComponent'


const ImmigrationControl = () => {
  return (
    <Layout headerStyle={2} footerStyle={2} footerClass="black-bg">
        <ImmigrationControlComponent/>

    </Layout>
  )
}

export default ImmigrationControl
