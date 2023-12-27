import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import "./admin-create-product-page.css";
import { handleMessage } from "../../components/Message";
import { setLoading } from "../../redux/slice/loadingSlice";

function AdminCreateProductPage() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.data);
  const navigate = useNavigate();

  const convertImageToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const handleSubmit = async (e) => {
    try {
      dispatch(setLoading(true));
      e.preventDefault();
      let formData = new FormData(e.target);
      formData = Object.fromEntries(formData);
      const imgInputEle = document.querySelector(".admin-create-product-page #img");
      const img = await convertImageToBase64(imgInputEle.files[0]);
      const imgHoverInputEle = document.querySelector(".admin-create-product-page #imgHover");
      const imgHover = await convertImageToBase64(imgHoverInputEle.files[0]);
      const imgListInputEle = document.querySelector(".admin-create-product-page #imgList");
      const imgList = [];
      for (let i = 0; i < imgListInputEle.files.length; i++) {
        const base64 = await convertImageToBase64(imgListInputEle.files[i]);
        imgList.push(base64);
      }
      formData.img = img;
      formData.imgHover = imgHover;
      formData.imgList = imgList;

      const resultCreateProduct = await fetch("http://localhost:8080/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      await resultCreateProduct.json();
      handleMessage("success", "Add product successfully.");
      navigate("/admin/product");
    } catch (error) {
      handleMessage("error", "The error has occurred. Please try again later!");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="admin-create-product-page admin-page">
      {userInfo && userInfo.email === "soulshine@gmail.com" ? (
        <>
          <HeaderAdmin />
          <main className="container py-5 font-cormorant">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center font-cormorant mb-3">Create Product</h1>
              <div className="mb-5">
                <label className="form-label mb-3">Product name</label>
                <input
                  type="text"
                  className="form-control form-control-lg p-3 fs-2"
                  placeholder="Product name"
                  required
                  name="productName"
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
                />
              </div>
              <div className="mb-5">
                <label className="form-label mb-3">Representative product images</label>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    required
                    accept="image/*"
                    className="form-control form-control-lg fs-2"
                    id="img"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label className="form-label mb-3">Representative product images when hover</label>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    required
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
                    required
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
                <button className="btn btn-primary fs-2">Submit</button>
              </div>
            </form>
          </main>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}

export default AdminCreateProductPage;
