
import PakJapanComponent from "@/components/elements/PakJapanComponent";
import Layout from "@/components/layout/Layout";


export default function PakJapan() {
  return (
    <>
      <Layout breadcrumbCategory="Category" breadcrumbPostTitle="Pak-Japan" headerStyle={2}>
        <>
        <PakJapanComponent/>
        </>
      </Layout>
    </>
  );
}
