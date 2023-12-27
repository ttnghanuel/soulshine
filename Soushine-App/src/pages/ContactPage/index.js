import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./contact-page.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <Header />
      <main>
        <div className="contact-page__banner position-relative">
          <img
            src="https://i.pinimg.com/736x/7c/d4/ae/7cd4ae97e27401791ae7d259693fea1f.jpg"
            className="w-100"
            alt=""
          />
          <div className="contact-page__banner__content text-white position-absolute">
            <h6 className="text-uppercase text-center font-cormorant fw-500">contact us</h6>
            <p className="font-open-sans fw-400 text-center">
              Our team care about your full relax. Please contact with us
            </p>
          </div>
        </div>
        <div className="contact-page__form container mt-5">
          <h6 className="text-uppercase text-center text-ss fw-700 w-75 mx-auto font-cormorant py-5">
            please provide us with your information
          </h6>
          <form className="mb-5">
            <div className="row g-4">
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  className="w-100 font-open-sans fw-400 border-secondary border p-3"
                  placeholder="Your name"
                  name="name"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  type="number"
                  className="w-100 font-open-sans fw-400 border-secondary border p-3"
                  placeholder="Your phone"
                  name="phone"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  type="email"
                  className="w-100 font-open-sans fw-400 border-secondary border p-3"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  className="w-100 font-open-sans fw-400 border-secondary border p-3"
                  placeholder="Address"
                  name="address"
                  required
                />
              </div>
              <div className="col-12">
                <textarea
                  rows={5}
                  className="w-100 font-open-sans fw-400 border-secondary border p-3"
                  placeholder="Note"
                  name="note"
                  required
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-ss font-open-sans fw-400 mx-auto mb-5">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
