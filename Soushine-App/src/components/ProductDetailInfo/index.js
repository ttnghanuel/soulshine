import React, { useState } from "react";
import "./product-detail-info.css";
import { useDispatch } from "react-redux";
import { setAddToCart } from "../../redux/slice/cartSlice";
import { handleMessage } from "../Message";

function ProductDetailInfo(props) {
  const dispatch = useDispatch();
  const productDetail = props.productDetail;
  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (number) => {
    if (number === -1 && quantity === 1) {
      return;
    }
    setQuantity(quantity + number);
  };

  const handleAddToCart = () => {
    dispatch(
      setAddToCart({
        id: productDetail._id,
        productName: productDetail.productName,
        orgPrice: productDetail.orgPrice,
        salePrice: productDetail.salePrice,
        summary: productDetail.summary,
        img: productDetail.img,
        quantity: quantity,
      })
    );
    handleMessage("success", `Added ${quantity} product to cart`);
    setQuantity(1);
  };

  const handleToggleText = (category, number) => {
    const categoryEle = document.querySelector(`.detail-product-info__${category}`);
    const plusIconEle = categoryEle.querySelector(".plus-icon");
    const minusIconEle = categoryEle.querySelector(".minus-icon");
    const textEle = categoryEle.querySelector("p");
    if (number === 1) {
      textEle.style.maxHeight = "150px";
      plusIconEle.classList.add("d-none");
      minusIconEle.classList.remove("d-none");
    } else {
      textEle.style.maxHeight = textEle.offsetHeight + "px";
      textEle.style.maxHeight = "0px";
      plusIconEle.classList.remove("d-none");
      minusIconEle.classList.add("d-none");
    }
  };

  return (
    <div className="detail-product-info">
      <div className="d-flex align-items-center justify-content-between">
        <h6 className="detail-product-info__product-name mb-0 font-cormorant fw-700 text-dark">
          {productDetail.productName}
        </h6>
        <div className="detail-product-info__price d-flex align-items-start">
          <span className="detail-product-info__price--active text-dark fw-400 font-cormorant">
            &#36;{productDetail.salePrice || productDetail.orgPrice}
          </span>
          {productDetail.salePrice && (
            <span className="detail-product-info__price--disable fw-400 font-cormorant text-decoration-line-through">
              &#36;{productDetail.orgPrice}
            </span>
          )}
        </div>
      </div>
      <div className="detail-product-info__rating d-flex align-items-center">
        <div>
          <img src="/assets/icon/star-fill.svg" className="me-2" alt="" width={20} />
          <img src="/assets/icon/star-fill.svg" className="me-2" alt="" width={20} />
          <img src="/assets/icon/star-fill.svg" className="me-2" alt="" width={20} />
          <img src="/assets/icon/star-fill.svg" className="me-2" alt="" width={20} />
          <img src="/assets/icon/star-fill.svg" className="me-2" alt="" width={20} />
        </div>
        <span className="font-cormorant text-dark fw-400">3 reviews</span>
      </div>
      <p className="detail-product-info__rating font-cormorant fw-400 text-dark">
        {productDetail.summary}
      </p>
      <div className="d-flex">
        <div className="detail-product-info__quantity rounded-pill text-dark text-open-sans fw-400">
          <button className="bg-transparent border-0" onClick={() => handleChangeQuantity(-1)}>
            &#8722;
          </button>
          <span className="d-inline-flex align-items-center justify-content-center">
            {quantity}
          </span>
          <button className="bg-transparent border-0" onClick={() => handleChangeQuantity(1)}>
            &#43;
          </button>
        </div>
        <button
          className="detail-product-info__add-cart btn-ss text-uppercase font-cormorant fw-400 rounded-pill flex-grow-1"
          onClick={handleAddToCart}
        >
          Add to card
        </button>
      </div>
      <div className="detail-product-info__description">
        <h6 className="text-dark mb-0 font-cormorant fw-700 d-flex align-items-center justify-content-between">
          Description
          <span
            className="plus-icon font-open-sans fw-300 text-ss"
            onClick={() => handleToggleText("description", 1)}
          ></span>
          <span
            className="minus-icon font-open-sans fw-300 text-ss d-none"
            onClick={() => handleToggleText("description", -1)}
          ></span>
        </h6>
        <p className="mb-0 text-dark font-open-sans fw-300">{productDetail.description}</p>
      </div>
      <div className="detail-product-info__ingredients">
        <h6 className="text-dark mb-0 font-cormorant fw-700 d-flex align-items-center justify-content-between">
          Ingredients
          <span
            className="plus-icon font-open-sans fw-300 text-ss"
            onClick={() => handleToggleText("ingredients", 1)}
          ></span>
          <span
            className="minus-icon font-open-sans fw-300 text-ss d-none"
            onClick={() => handleToggleText("ingredients", -1)}
          ></span>
        </h6>
        <p className="mb-0 text-dark font-open-sans fw-300">{productDetail.ingredients}</p>
      </div>
      <div className="detail-product-info__how-to-use">
        <h6 className="text-dark mb-0 font-cormorant fw-700 d-flex align-items-center justify-content-between">
          How To Use
          <span
            className="plus-icon font-open-sans fw-300 text-ss"
            onClick={() => handleToggleText("how-to-use", 1)}
          ></span>
          <span
            className="minus-icon font-open-sans fw-300 text-ss d-none"
            onClick={() => handleToggleText("how-to-use", -1)}
          ></span>
        </h6>
        <p className="mb-0 text-dark font-open-sans fw-300">{productDetail.howToUse}</p>
      </div>
      <div className="detail-product-info__how-to-feel">
        <h6 className="text-dark mb-0 font-cormorant fw-700 d-flex align-items-center justify-content-between">
          How To Feel
          <span
            className="plus-icon font-open-sans fw-300 text-ss"
            onClick={() => handleToggleText("how-to-feel", 1)}
          ></span>
          <span
            className="minus-icon font-open-sans fw-300 text-ss d-none"
            onClick={() => handleToggleText("how-to-feel", -1)}
          ></span>
        </h6>
        <p className="mb-0 text-dark font-open-sans fw-300">{productDetail.howToFeel}</p>
      </div>
    </div>
  );
}

export default ProductDetailInfo;
