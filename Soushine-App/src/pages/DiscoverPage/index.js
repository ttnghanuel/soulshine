import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./discover-page.css";
import { quizList } from "../../data";
import { useSelector } from "react-redux";

function DiscoverPage() {
  const productList = useSelector((state) => state.productList.data);
  const [quiz, setQuiz] = useState({ first: "", second: "", third: "" });
  const [isDisabled, setIsDisabled] = useState(true);
  const [suggestedProductList, setSuggestedProductList] = useState([]);

  const handleClick = (order, value) => {
    setQuiz((prev) => {
      const newQuizState = { ...prev, [order]: value };
      if (newQuizState.first !== "" && newQuizState.second !== "" && newQuizState.third !== "") {
        setIsDisabled(false);
      }
      return newQuizState;
    });
  };

  const handleSubmit = () => {
    const newSuggestedProductListState = [];
    productList.forEach((item) => {
      const random = Math.floor(Math.random() * (1 - 0 + 1) + 0);
      random === 0 && newSuggestedProductListState.push(item);
    });
    setSuggestedProductList(newSuggestedProductListState);
  };

  return (
    <div className="discover-page">
      <Header />
      <div className="discover-page__banner">
        <img
          src="https://i.pinimg.com/736x/33/a6/ee/33a6ee063fea6f0b45cf752bc3030bb9.jpg"
          alt=""
          className="w-100"
        />
      </div>
      <div className="discover-page__first">
        <h6 className="w-75 text-center mx-auto text-dark font-cormorant fw-700 text-capitalize">
          Two words to describe my go to fragrance are...
        </h6>
        <div className="text-center">
          {quizList.first.map((item, index) => {
            return (
              <Fragment key={index}>
                <button
                  className={`fw-700 font-cormorant rounded-pill ${
                    quiz.first === item.value && "active"
                  }`}
                  onClick={() => handleClick("first", item.value)}
                >
                  {item.title}
                </button>
                {index % 3 === 2 && <br />}
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className="discover-page__second">
        <h6 className="w-75 text-center mx-auto text-dark font-cormorant fw-700 text-capitalize">
          On the weekends, I'm a&#40;n&#41;...
        </h6>
        <div className="text-center">
          {quizList.second.map((item, index) => {
            return (
              <Fragment key={index}>
                <button
                  className={`fw-700 font-cormorant rounded-pill ${
                    quiz.second === item.value && "active"
                  }`}
                  onClick={() => handleClick("second", item.value)}
                >
                  {item.title}
                </button>
                {index % 3 === 2 && <br />}
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className="discover-page__third">
        <h6 className="w-75 text-center mx-auto text-dark font-cormorant fw-700 text-capitalize">
          The scents I remember most...
        </h6>
        <div className="text-center">
          {quizList.third.map((item, index) => {
            return (
              <Fragment key={index}>
                <button
                  className={`fw-700 font-cormorant rounded-pill ${
                    quiz.third === item.value && "active"
                  }`}
                  onClick={() => handleClick("third", item.value)}
                >
                  {item.title}
                </button>
                {index % 3 === 2 && <br />}
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className="discover-page__submit">
        <button
          className={`btn-ss text-white fw-400 text-uppercase rounded-pill mx-auto font-cormorant ${
            isDisabled && "disabled"
          }`}
          disabled={isDisabled}
          onClick={handleSubmit}
        >
          Find product
        </button>
      </div>
      {suggestedProductList.length > 0 && (
        <div className="discover-page__suggested-product container">
          <h6 className="text-center text-dark fw-600 font-cormorant">
            You might be good match with:
          </h6>
          <div className="row gx-5">
            {suggestedProductList.map((item, index) => {
              return (
                <div className="col-12 col-md-6 col-lg-4" key={index}>
                  <Link
                    to={`/shop/${item._id}`}
                    className="discover-page__suggested-product__item d-flex align-items-center border rounded text-decoration-none bg-white"
                  >
                    <img src={item.img} alt="" className="object-fit-cover" />
                    <div>
                      <p className="mb-0 text-dark fw-700 font-cormorant">{item.productName}</p>
                      <p className="mb-0 text-dark fw-400 font-cormorant">{item.summary}</p>
                      <p className="mb-0 text-dark fw-400 font-cormorant">
                        {item.salePrice && (
                          <span className="text-black-50 text-decoration-line-through me-2">
                            &#36;{item.orgPrice}
                          </span>
                        )}
                        <span>&#36;{item.salePrice || item.orgPrice}</span>
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default DiscoverPage;
