import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import { setLoading } from "../../redux/slice/loadingSlice";
import { handleMessage } from "../../components/Message";

function AdminOrderPage() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.data);
  const [orderList, setOrderList] = useState([]);

  const handleGetOrderList = async () => {
    try {
      dispatch(setLoading(true));
      const resultGetOrderListApi = await fetch("http://localhost:8080/order");
      const data = await resultGetOrderListApi.json();
      setOrderList(data);
    } catch (error) {
      handleMessage("error", "The error has occurred. Please try again later!");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    handleGetOrderList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="admin-product-page admin-page">
      {userInfo && userInfo.email === "soulshine@gmail.com" ? (
        <>
          <HeaderAdmin />
          <main className="container py-5">
            <div className="card">
              <div className="table-responsive">
                <table className="table table-bordered mb-0">
                  <thead>
                    <tr>
                      <th scope="col" className="align-middle">
                        #
                      </th>
                      <th scope="col" className="align-middle">
                        Email
                      </th>
                      <th scope="col" className="align-middle">
                        Name
                      </th>
                      <th scope="col" className="text-center align-middle">
                        Phone
                      </th>
                      <th scope="col" className="text-center align-middle">
                        Status
                      </th>
                      <th scope="col" className="text-center align-middle"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderList.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row" className="align-middle">
                            {item._id}
                          </th>
                          <td className="align-middle">{item.email}</td>
                          <td className="align-middle">{item.fullname}</td>
                          <td className="text-center align-middle">{item.phone}</td>
                          <td className="text-center align-middle">{item.status}</td>
                          <td className="text-center">
                            <Link
                              to={`/admin/order/${item._id}`}
                              className="btn btn-lg btn-outline-info mx-2"
                            >
                              Chi tiết
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}

export default AdminOrderPage;
