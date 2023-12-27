import React from "react";
import "./home-page.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import FAQs from "../../components/FAQs";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const productList = useSelector((state) => state.productList.data);
  return (
    <div className="home-page">
      <Header />
      <div className="home-page__introduction d-flex">
        <div className="home-page__introduction__left d-none d-xl-block">
          <img
            src="https://i.pinimg.com/474x/a2/0b/6b/a20b6b228093e726d28061f8cec802b6.jpg"
            alt=""
          />
          <div className="seperate w-100"></div>
        </div>
        <div className="home-page__introduction__right d-flex flex-column justify-content-end justify-content-xl-center pb-5 pb-xl-0">
          <h6 className="font-cormorant text-uppercase mb-0 fw-400">#SOULSHINECANDLEXPERIENCE</h6>
          <p className="mb-0 font-cormorant fw-600">
            Always <span className="text-ss">cool and soothe</span> your feelings available in a
            variety of <span className="text-ss">candle</span>
          </p>
          <Link
            to="/shop"
            className="text-uppercase btn-ss font-cormorant rounded-pill fw-400 text-decoration-none"
          >
            Discover Products
          </Link>
        </div>
      </div>
      <div className="home-page__trending container">
        <h6 className="text-center text-uppercase font-cormorant text-dark fw-400">Trending</h6>
        <h5 className="text-center font-cormorant text-dark fw-600 text-ss-dark">
          Shop our popular bestsellers products
        </h5>
        <div className="row gx-4">
          {productList.map((item, index) => {
            if (index > 3) {
              return "";
            }
            return (
              <div key={item._id} className="col-12 col-sm-6 col-lg-3 px-4 py-3 py-lg-0">
                <ProductCard productData={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container">
        <div className="seperate"></div>
      </div>
      <div className="home-page__slider container text-center">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/assets/image/introduction-banner-1.png" className="w-100" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/image/introduction-banner-1.png" className="w-100" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="home-page__benefit">
        <div className="container">
          <h6 className="text-uppercase text-dark font-cormorant text-center fw-700">
            Making Fragrance a Conversation Piece
          </h6>
          <h5 className="text-ss-dark fw-600 text-center font-cormorant">
            Inspired by personal recollections and cultural trends, each candle is designed to
            remind us of stories worth sharing.
          </h5>
          <div className="home-page__benefit__icon-list d-flex justify-content-center flex-wrap">
            <div className="home-page__benefit__icon-item">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center">
                <img src="/assets/image/introduction-benefit-1.svg" className="w-50" alt="" />
              </div>
              <p className="mb-0 text-center text-dark fw-600 font-cormorant">Vegan ingredients</p>
            </div>
            <div className="home-page__benefit__icon-item">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center">
                <img src="/assets/image/introduction-benefit-2.svg" className="w-50" alt="" />
              </div>
              <p className="mb-0 text-center text-dark fw-600 font-cormorant">Variety of scents</p>
            </div>
            <div className="home-page__benefit__icon-item">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center">
                <img src="/assets/image/introduction-benefit-3.svg" className="w-50" alt="" />
              </div>
              <p className="mb-0 text-center text-dark fw-600 font-cormorant">Beautiful designs</p>
            </div>
            <div className="home-page__benefit__icon-item">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center">
                <img src="/assets/image/introduction-benefit-4.svg" className="w-50" alt="" />
              </div>
              <p className="mb-0 text-center text-dark fw-600 font-cormorant">Affordable price</p>
            </div>
            <div className="home-page__benefit__icon-item">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center">
                <img src="/assets/image/introduction-benefit-5.svg" className="w-50" alt="" />
              </div>
              <p className="mb-0 text-center text-dark fw-600 font-cormorant">
                Cruelty-Free Products
              </p>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-6 d-none d-lg-block">
              <img
                src="https://i.pinimg.com/736x/98/a8/fd/98a8fd9bbe58abbe4a88ce4b0f7ec54f.jpg"
                className="w-100"
                alt=""
              />
            </div>
            <div className="col-12 col-md-6">
              <img
                src="https://i.pinimg.com/736x/d0/67/ab/d067ab7838679f953c5e1b83711cf02a.jpg"
                className="w-100"
                alt=""
              />
              <h6 className="text-ss-dark font-cormorant fw-700">Durable</h6>
              <p className="mb-0 text-white font-open-sans fw-400">
                The life of the candle reaches 6 months since it is used and still feels the smell
              </p>
            </div>
            <div className="col-12 col-md-6">
              <img
                src="https://i.pinimg.com/736x/84/ab/9a/84ab9aec8895a4a0dd72685a8a3a77bc.jpg"
                className="w-100"
                alt=""
              />
              <h6 className="text-ss-dark font-cormorant fw-700">Calm</h6>
              <p className="mb-0 text-white font-open-sans fw-400">
                The aroma emitted by the candles soothes the feeling and the room is of course very
                durable
              </p>
            </div>
            <div className="col-6 d-none d-lg-block">
              <img
                src="https://i.pinimg.com/736x/09/ab/eb/09abeb25eed9c4617d93917cf709f766.jpg"
                className="w-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-page__find-product position-relative">
        <img
          src="https://i.pinimg.com/736x/33/a6/ee/33a6ee063fea6f0b45cf752bc3030bb9.jpg"
          className="w-100"
          alt=""
        />
        <Link
          to="/shop"
          className="btn-ss text-uppercase rounded-pill font-cormorant fw-400 text-decoration-none"
        >
          Find product
        </Link>
      </div>
      <div className="home-page__faqs container">
        <h6 className="home-page__faqs__heading text-ss-dark font-cormorant">FAQs</h6>
        <FAQs />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
