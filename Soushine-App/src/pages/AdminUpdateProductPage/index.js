import React, { useEffect, useState } from "react";
import "./admin-update-product-page.css";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeaderAdmin from "../../components/HeaderAdmin";
import { setLoading } from "../../redux/slice/loadingSlice";
import { handleMessage } from "../../components/Message";

function AdminUpdateProductPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.data);

  const convertImageToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const handleGetProductDetail = async (productId) => {
    try {
      dispatch(setLoading(true));
      const resultGetProductDetailApi = await fetch(`http://localhost:8080/product/${productId}`);
      const data = await resultGetProductDetailApi.json();
      setProductDetail(data);
    } catch (error) {
      navigate("/shop");
      handleMessage("error", "The error has occurred. Please try again later!");
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleSubmit = async (e) => {
    try {
      dispatch(setLoading(true));
      e.preventDefault();
      let formData = new FormData(e.target);
      formData = Object.fromEntries(formData);
      const imgInputEle = document.querySelector(".admin-update-product-page #img");
      const img =
        imgInputEle.files.length > 0
          ? await convertImageToBase64(imgInputEle.files[0])
          : productDetail.img;
      const imgHoverInputEle = document.querySelector(".admin-update-product-page #imgHover");
      const imgHover =
        imgHoverInputEle.files.length > 0
          ? await convertImageToBase64(imgHoverInputEle.files[0])
          : productDetail.imgHover;
      const imgListInputEle = document.querySelector(".admin-update-product-page #imgList");
      const imgList = imgListInputEle.files.length > 0 ? [] : productDetail.imgList;
      for (let i = 0; i < imgListInputEle.files.length; i++) {
        const base64 = await convertImageToBase64(imgListInputEle.files[i]);
        imgList.push(base64);
      }
      formData.img = img;
      formData.imgHover = imgHover;
      formData.imgList = imgList;
      formData._id = id;

      const resultUpdateProduct = await fetch("http://localhost:8080/product", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      await resultUpdateProduct.json();
      handleMessage("success", "Add product successfully.");
      navigate("/admin/product");
    } catch (error) {
      console.log(error);
      handleMessage("error", "The error has occurred. Please try again later!");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (id) {
      handleGetProductDetail(id);
    } else {
      navigate("/admin/product");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="admin-update-product-page admin-page">
      {userInfo && userInfo.email === "soulshine@gmail.com" ? (
        <>
          <HeaderAdmin />
          {productDetail && (
            <main className="container py-5 font-cormorant">
              <form onSubmit={handleSubmit}>
                <h1 className="text-center font-cormorant mb-3">
                  Update Product {productDetail.productName}
                </h1>
                <div className="mb-5">
                  <label className="form-label mb-3">Product name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg p-3 fs-2"
                    placeholder="Product name"
                    required
                    name="productName"
                    defaultValue={productDetail.productName}
                  />
                </div>
                <div className="mb-5">
                  <label className="form-label mb-3">Original price</label>
                  <input
                    type="number"
                    className="form-control form-control-lg p-3 fs-2"
                    placeholder="Original price"
                    required
                    name="orgPrice"
                    defaultValue={productDetail.orgPrice}
                  />
                </div>
                <div className="mb-5">
                  <label className="form-label mb-3">Sale price</label>
                  <input
                    type="number"
                    className="form-control form-control-lg p-3 fs-2"
                    placeholder="Sale price"
                    required
                    name="salePrice"
                    defaultValue={productDetail.salePrice}
                  />
                </div>
                <div className="mb-5">
                  <label className="form-label mb-3">Summary</label>
                  <textarea
                    rows={3}
                    className="form-control form-control-lg p-3 fs-2"
                    placeholder="Summary"
                    required
                    name="summary"
                    defaultValue={productDetail.summary}
                  />
                </div>
                <div className="mb-5">
                  <label className="form-label mb-3">Description</label>
                  <textarea
                    rows={5}
                    className="form-control form-control-lg p-3 fs-2"
                    placeholder="Description"
                    required
                    name="description"
                    defaultValue={productDetail.description}
                  />
                </div>
                <div className="mb-5">
                  <label className="form-label mb-3">How to Use</label>
                  <textarea
                    rows={5}
                    className="form-control form-control-lg p-3 fs-2"
                    placeholder="How to Use"
                    required
                    name="howToUse"
                    defaultValue={productDetail.howToUse}
                  />
                </div>
                <div className="mb-5">
                  <label className="form-label mb-3">How to Feel</label>
                  <textarea
                    rows={5}
                    className="form-control form-control-lg p-3 fs-2"
                    placeholder="How to Feel"
                    required
                    name="howToFeel"
                    defaultValue={productDetail.howToFeel}
                  />
                </div>
                <div className="mb-5">
                  <label className="form-label mb-3">Ingredients</label>
                  <textarea
                    rows={5}
                    className="form-control form-control-lg p-3 fs-2"
                    placeholder="Ingredients"
                    required
                    name="ingredients"
                    defaultValue={productDetail.ingredients}
                  />
                </div>
                <div className="mb-5">
                  <label className="form-label mb-3">Representative product images</label>
                  <div className="input-group mb-3">
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control form-control-lg fs-2"
                      id="img"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="form-label mb-3">
                    Representative product images when hover
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control form-control-lg fs-2"
                      id="imgHover"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="form-label mb-3">List of detailed product images</label>
                  <div className="input-group mb-3">
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control form-control-lg fs-2"
                      id="imgList"
                      multiple
                    />
                  </div>
                </div>
                <div className="mb-5 text-end">
                  <button type="reset" className="btn btn-secondary me-3 fs-2">
                    Reset
                  </button>
                  <button className="btn btn-primary fs-2">Update</button>
                </div>
              </form>
            </main>
          )}
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}

export default AdminUpdateProductPage;
