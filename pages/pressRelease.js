import BlogSidebar from "@/components/elements/BlogSidebar";
import PressRelaeseComponent from "@/components/elements/PressRelaeseComponent";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function PressRelease() {
  return (
    <>
      <Layout breadcrumbCategory="Category" breadcrumbPostTitle="Press Release" headerStyle={2}>
        <section className="blog-details-area pt-80 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-1">
                <div className="blog-details-social">
                  <ul className="list-wrap">
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-behance" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fas fa-share" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7">
              <PressRelaeseComponent/>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                {/* <BlogSidebar /> */}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
