import KashmirComponent from "@/components/elements/KashmirComponent";
import Layout from "@/components/layout/Layout";

export default function Kasmir() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1} footerClass="black-bg" logoWhite>
        <KashmirComponent/>
      </Layout>
    </>
  );
}
