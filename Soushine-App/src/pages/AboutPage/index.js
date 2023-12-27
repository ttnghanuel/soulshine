import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./about-page.css";

function AboutPage() {
  return (
    <div className="about-page">
      <Header />
      <main>
        <div
          className="about-page__banner"
          style={{
            background:
              "url(https://i.pinimg.com/736x/7c/d4/ae/7cd4ae97e27401791ae7d259693fea1f.jpg) center center / cover",
          }}
        >
          <div className="about-page__banner__content text-white w-100">
            <h6 className="text-uppercase text-center font-cormorant fw-500">About US</h6>
            <p className="fw-400 font-open-sans mb-0 mx-auto">
              DEAR SOULMATE, <br />
              With a passion for the scents emanating from candles, we have decided to establish
              Soulshine scented candles.
              <br />
              Soulshine - A brand specializing in scented candles, is born with a mission to provide
              meticulous care for the spirits of today's youth. Furthermore, we believe that scented
              candles are not just decorative items but also a therapeutic method to relax,
              alleviate stress, and heal the soul.
            </p>
          </div>
        </div>
        <div className="about-page__history bg-ss d-flex jsutify-content-between">
          <img
            src="https://i.pinimg.com/736x/a0/b2/d7/a0b2d7ccda7c3ee4f16f48eebea14132.jpg"
            alt=""
          />
          <div className="about-page__history__content px-5 mx-0 mx-md-5 d-flex align-items-start flex-column justify-content-center">
            <h6 className="text-white fw-700 font-cormorant">Shine Your Soul</h6>
            <p className="text-white font-open-sans fw-400">
              Soulshine - Shine your Soul is named inspired by a burning candle to bring light to
              the surrounding space. "Soul Shine" symbolizes scented candles, bringing warmth to
              your soul.
            </p>
          </div>
        </div>
        <div className="bg-white p-5">
          <div className="about-page__welcome border border-ss d-flex flex-wrap p-0">
            <div className="about-page__welcome__content w-50 p-5">
              <h6 className="fw-700 text-ss font-cormorant">Soulshine welcomes you</h6>
              <p className="font-open-sans fw-400">
                At Soulshine, we are not just makers of scented candles, but passionate creators,
                filled with love for art and refinement.
                <br />
                We believe that each scented candle not only brings a pleasant fragrance but is also
                a part of a story, enlivening the atmosphere and creating beautiful memories.
                <br />
                Soulshine is not just a product; it's a relaxation journey, a perfect blend of
                fragrance and soul. We hope that each Soulshine scented candle will make your space
                warmer, more elegant, and, most importantly, bring you moments of peace and
                relaxation in today's hectic life.
                <br />
                Join Soulshine and let us guide you on a journey of relaxation and exploration of
                our unique world of fragrances!
              </p>
            </div>
            <div
              className="w-50"
              style={{
                background:
                  "url(https://i.pinimg.com/474x/ad/ee/38/adee386e8cf919f405e18ddafe6c6a60.jpg) center center / cover",
              }}
            ></div>
          </div>
        </div>
        <div className="about-page__benefit m-5 py-5">
          <h6 className="text-uppercase text-dark font-cormorant text-center fw-700">
            Making Fragrance a Conversation Piece
          </h6>
          <h5 className="text-ss-dark fw-600 text-center font-cormorant">
            Inspired by personal recollections and cultural trends, each candle is designed to
            remind us of stories worth sharing.
          </h5>
          <div className="about-page__benefit__icon-list d-flex justify-content-center flex-wrap">
            <div className="about-page__benefit__icon-item">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center">
                <img src="/assets/image/introduction-benefit-1.svg" className="w-50" alt="" />
              </div>
              <p className="mb-0 text-center text-dark fw-600 font-cormorant">Vegan ingredients</p>
            </div>
            <div className="about-page__benefit__icon-item">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center">
                <img src="/assets/image/introduction-benefit-2.svg" className="w-50" alt="" />
              </div>
              <p className="mb-0 text-center text-dark fw-600 font-cormorant">Variety of scents</p>
            </div>
            <div className="about-page__benefit__icon-item">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center">
                <img src="/assets/image/introduction-benefit-3.svg" className="w-50" alt="" />
              </div>
              <p className="mb-0 text-center text-dark fw-600 font-cormorant">Beautiful designs</p>
            </div>
            <div className="about-page__benefit__icon-item">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center">
                <img src="/assets/image/introduction-benefit-4.svg" className="w-50" alt="" />
              </div>
              <p className="mb-0 text-center text-dark fw-600 font-cormorant">Affordable price</p>
            </div>
            <div className="about-page__benefit__icon-item">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center">
                <img src="/assets/image/introduction-benefit-5.svg" className="w-50" alt="" />
              </div>
              <p className="mb-0 text-center text-dark fw-600 font-cormorant">
                Cruelty-Free Products
              </p>
            </div>
          </div>
        </div>
        <div className="about-page__reviews p-5">
          <h6 className="text-ss fw-500 font-cormorant">Reviews</h6>
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="about-page__reviews__item bg-white p-5 h-100">
                <div className="about-page__reviews__avatar text-center">
                  <img
                    src="https://i.pinimg.com/originals/d0/c4/1b/d0c41b2734aa37dd363f4cc9ebf8ff90.jpg"
                    alt=""
                    width={80}
                    height={80}
                    className="rounded-circle"
                  />
                  <p className="mb-0 font-open-sans fw-400">Selena</p>
                </div>
                <div className="about-page__reviews__content font-open-sans fw-400 p-5">
                  After using Soulshine's products into my daily routine, I can confidently say that
                  this brand has become synonymous with tranquility in my life. The carefully
                  curated scents not only elevate the ambiance of my living space but also
                  contribute significantly to my overall well-being.
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="about-page__reviews__item bg-white p-5 h-100">
                <div className="about-page__reviews__avatar text-center">
                  <img
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSTf9kJA8KXGrJ8-mm2Jd8E9gwu33EGwkH_qcXdNwbQogfX7JA1"
                    alt=""
                    width={80}
                    height={80}
                    className="rounded-circle"
                  />
                  <p className="mb-0 font-open-sans fw-400">Davina</p>
                </div>
                <div className="about-page__reviews__content font-open-sans fw-400 p-5">
                  Beyond the aesthetics and quality, Soulshine understands the transformative power
                  of fragrance. Their scents have become anchors for specific moods and activities
                  in my daily life. I love this.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
