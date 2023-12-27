import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css";
import { blogList } from "../../data";
import { Link } from "react-router-dom";

function BlogPage() {
  return (
    <div className="blog-page">
      <Header />
      <main>
        <div className="blog-page__heading container">
          <h4 className="text-ss text-center fw-500 font-cormorant">Our Blog</h4>
          <p className="text-center fw-400 font-open-sans tetx-dark">
            Get the latest updates and deeper candles experience from Soulshine Candles
          </p>
          <div className="blog-page__heading__blog-post">
            <img src={blogList[0].img} alt="" />
            <p className="blog-page__heading__blog-post__title text-dark fw-500 font-cormorant mb-0">
              {blogList[0].title}
            </p>
            <p className="blog-page__heading__blog-post__time font-open-sans fw-400">
              {blogList[0].readTime} Min - {blogList[0].createdAt}
            </p>
          </div>
        </div>
        <div className="blog-page__list bg-white">
          <div className="container">
            {blogList.map((item, index) => {
              if (index === 0) return "";
              return (
                <Link
                  key={index}
                  to="/blog"
                  className="blog-page__list__blog-post text-decoration-none d-flex align-items-start"
                >
                  <img src={item.img} alt="" className="d-inline-block" />
                  <div className="d-inline-block">
                    <p className="blog-page__list__blog-post__title fw-500 font-cormorant mb-0">
                      {item.title}
                    </p>
                    <p className="blog-page__list__blog-post__time font-open-sans fw-400 mb-0">
                      {item.readTime} Min - {item.createdAt}
                    </p>
                  </div>
                </Link>
                // <div
                //   key={index}
                //   className="blog-page__list__blog-post d-flex align-items-start text-decoration-none text-hover-ss"
                // >
                //   <img src={item.img} alt="" />
                //   <div>
                //     <p className="blog-page__list__blog-post__title fw-500 font-cormorant mb-0">
                //       {item.title}
                //     </p>
                //     <p className="blog-page__list__blog-post__time font-open-sans fw-400 mb-0">
                //       {item.readTime} Min - {item.createdAt}
                //     </p>
                //   </div>
                // </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default BlogPage;
