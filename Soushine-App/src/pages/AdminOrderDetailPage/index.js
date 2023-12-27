import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import { setLoading } from "../../redux/slice/loadingSlice";
import { handleMessage } from "../../components/Message";
import "./admin-order-detail-page.css";

function AdminOrderDetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userInfo = useSelector((state) => state.user.data);
  const [orderDetail, setOrderDetail] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(setLoading(true));
      let formData = new FormData(e.target);
      formData = Object.fromEntries(formData);
      formData._id = orderDetail._id;
      await fetch("http://localhost:8080/order", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      handleMessage("success", "Update order status successfully.");
      setOrderDetail((prev) => {
        return { ...prev, status: formData.status };
      });
    } catch (error) {
      handleMessage("error", "The error has occurred. Please try again later!");
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleGetOrderDetail = async (orderId) => {
    try {
      dispatch(setLoading(true));
      const resultGetOrderDetailApi = await fetch(`http://localhost:8080/order/${orderId}`);
      const data = await resultGetOrderDetailApi.json();
      setOrderDetail(data);
    } catch (error) {
      handleMessage("error", "The error has occurred. Please try again later!");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (id) {
      handleGetOrderDetail(id);
    } else {
      navigate("/admin/order");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="admin-order-detail-page admin-page">
      {userInfo && userInfo.email === "soulshine@gmail.com" ? (
        <>
          <HeaderAdmin />
          {orderDetail && (
            <main className="container py-5">
              <div className="card mx-auto p-5">
                <p className="text-ss fs-1 text-center lh-lg">Order detail</p>
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mt-5">
                  <div className="fs-3">
                    <p className="text-ss font-cormorant fw-600 fs-2 lh-lg">Order id</p>
                    <p className="text-dark">{id}</p>
                  </div>
                  <div className="fs-3">
                    <p className="text-ss font-cormorant fw-600 fs-2 lh-base">Status</p>
                    <p
                      class={`badge text-uppercase bg-${
                        orderDetail.status === "success"
                          ? "success"
                          : orderDetail.status === "failed"
                          ? "danger"
                          : "warning"
                      }`}
                      role="alert"
                    >
                      {orderDetail.status}
                    </p>
                  </div>
                </div>
                <div className="mt-5 fs-3">
                  <p className="text-ss font-cormorant fw-600 fs-2 lh-lg">Shipment Details</p>
                  <p className="text-dark lh-lg">{orderDetail.fullname}</p>
                  <p className="text-dark lh-lg">{orderDetail.email}</p>
                  <p className="text-dark lh-lg">{orderDetail.phone}</p>
                  <p className="text-dark lh-lg">{orderDetail.address}</p>
                </div>
                <div className="mt-5 fs-3">
                  <p className="text-ss font-cormorant fw-600 fs-2 lh-lg">Note</p>
                  <p className="text-dark lh-lg">{orderDetail.note}</p>
                </div>
                <div className="mt-5 fs-3">
                  <p className="text-ss font-cormorant fw-600 fs-2 lh-lg">Cart Details</p>
                  {orderDetail.cart.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className="d-flex justify-content-between">
                          <p className="lh-lg">
                            {item.productName} x {item.quantity}
                          </p>
                          <p className="lh-lg">
                            &#36;{item.salePrice || item.orgPrice}
                            {item.salePrice && (
                              <span className="fw-400 text-muted text-decoration-line-through fs-5 ms-2">
                                &#36;{item.orgPrice}
                              </span>
                            )}
                          </p>
                        </div>
                        <div></div>
                      </div>
                    );
                  })}
                  <div className="d-flex justify-content-between fs-3 border-top">
                    <p className="lh-lg">Sub total</p>
                    <p className="lh-lg">&#36;{orderDetail.subTotal}</p>
                  </div>
                  <div className="d-flex justify-content-between fs-3">
                    <p className="lh-lg">Ship Fee</p>
                    <p className="lh-lg">&#36;{orderDetail.shippingMethod}</p>
                  </div>
                  <div className="d-flex justify-content-between fs-2 border-top fw-600">
                    <p className="lh-lg">Total</p>
                    <p className="lh-lg">&#36;{orderDetail.subTotal + orderDetail.subTotal}</p>
                  </div>
                </div>
                <div className="mt-5 fs-3">
                  <p className="text-ss font-cormorant fw-600 fs-2 lh-lg">Cart Details</p>
                  {orderDetail.cart.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className="d-flex justify-content-between">
                          <p className="lh-lg">
                            {item.productName} x {item.quantity}
                          </p>
                          <p className="lh-lg">
                            &#36;{item.salePrice || item.orgPrice}
                            {item.salePrice && (
                              <span className="fw-400 text-muted text-decoration-line-through fs-5 ms-2">
                                &#36;{item.orgPrice}
                              </span>
                            )}
                          </p>
                        </div>
                        <div></div>
                      </div>
                    );
                  })}
                  <div className="d-flex justify-content-between fs-3 border-top">
                    <p className="lh-lg">Sub total</p>
                    <p className="lh-lg">&#36;{orderDetail.subTotal}</p>
                  </div>
                  <div className="d-flex justify-content-between fs-3">
                    <p className="lh-lg">Ship Fee</p>
                    <p className="lh-lg">&#36;{orderDetail.shippingMethod}</p>
                  </div>
                  <div className="d-flex justify-content-between fs-2 border-top fw-600">
                    <p className="lh-lg">Total</p>
                    <p className="lh-lg">&#36;{orderDetail.subTotal + orderDetail.subTotal}</p>
                  </div>
                </div>
                {orderDetail.status === "process" && (
                  <div className="mt-5 fs-3">
                    <p className="text-ss font-cormorant fw-600 fs-2 lh-lg">Update order</p>
                    <form onSubmit={handleSubmit}>
                      <div class="form-check d-flex align-items-center">
                        <input
                          class="form-check-input me-3 lh-lg"
                          type="radio"
                          required
                          name="status"
                          id="orderStatus1"
                          value="success"
                        />
                        <label class="form-check-label lh-lg" for="orderStatus1">
                          Successful order
                        </label>
                      </div>
                      <div class="form-check d-flex align-items-center">
                        <input
                          class="form-check-input me-3 lh-lg"
                          type="radio"
                          required
                          name="status"
                          id="orderStatus2"
                          value="failed"
                        />
                        <label class="form-check-label lh-lg" for="orderStatus2">
                          Order failed
                        </label>
                      </div>
                      <div className="text-end mt-4">
                        <button className="btn btn-primary fs-3">Update status</button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </main>
          )}
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}

export default AdminOrderDetailPage;
