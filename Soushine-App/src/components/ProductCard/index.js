import React from "react";
import "./product-card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAddToCart } from "../../redux/slice/cartSlice";
import { handleMessage } from "../Message";

function ProductCard(props) {
  const dispatch = useDispatch();
  const productData = props.productData;
  const handleAddToCart = () => {
    dispatch(
      setAddToCart({
        id: productData._id,
        productName: productData.productName,
        orgPrice: productData.orgPrice,
        salePrice: productData.salePrice,
        summary: productData.summary,
        img: productData.img,
        quantity: 1,
      })
    );
    handleMessage("success", "Added 1 product to cart");
  };
  return (
    <div className="product-card">
      <Link to={`/shop/${productData._id}`} className="d-block text-decoration-none">
        <div className="product-card__thumbnail">
          <img src={productData.img} alt="" className="product-card__thumbnail__img w-100" />
          <img
            src={productData.imgHover}
            alt=""
            className="product-card__thumbnail__img-hover w-100"
          />
        </div>
        <div className="product-card__info">
          <div className="d-flex align-items-center justify-content-between">
            <span className="product-card__info__product-name text-dark fw-600 font-cormorant text-truncate">
              {productData.productName}
            </span>
            <div className="product-card__info__price d-flex align-items-start">
              <span className="product-card__info__price--active text-dark fw-400 font-cormorant">
                &#36;{productData.salePrice || productData.orgPrice}
              </span>
              {productData.salePrice && (
                <span className="product-card__info__price--disable fw-400 font-cormorant text-decoration-line-through">
                  &#36;{productData.orgPrice}
                </span>
              )}
            </div>
          </div>
          <p className="product-card__info__description text-dark font-open-sans fw-400 mb-0 text-truncate">
            {productData.summary}
          </p>
        </div>
      </Link>
      <button
        className="d-flex align-items-center justify-content-center rounded-pill text-uppercase btn-outline-ss w-100 font-zilla fw-500"
        onClick={handleAddToCart}
      >
        add to cart <img src="/assets/icon/circle-plus.svg" alt="" />
      </button>
    </div>
  );
}

export default ProductCard;
