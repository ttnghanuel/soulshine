import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import { setLoading } from "../../redux/slice/loadingSlice";
import { handleMessage } from "../../components/Message";

function AdminProductPage() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.data);
  const [productList, setProductList] = useState([]);

  const handleDeleteProduct = async (id) => {
    try {
      dispatch(setLoading(true));
      await fetch(`http://localhost:8080/product/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      handleMessage("success", "Deleted product success");
      const newProductList = productList.filter((item) => item._id !== id);
      dispatch(setProductList(newProductList));
    } catch (error) {
      handleMessage("success", "Deleted product failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleGetProductList = async () => {
    try {
      dispatch(setLoading(true));
      const resultGetProductListApi = await fetch("http://localhost:8080/product");
      const data = await resultGetProductListApi.json();
      setProductList(data);
    } catch (error) {
      handleMessage("error", "The error has occurred. Please try again later!");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    handleGetProductList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="admin-product-page admin-page">
      {userInfo && userInfo.email === "soulshine@gmail.com" ? (
        <>
          <HeaderAdmin />
          <main className="container py-5">
            <div className="text-end mb-4">
              <Link to="/admin/product/create" className="btn btn-success btn-lg">
                Thêm sản phẩm
              </Link>
            </div>
            <div className="card">
              <div className="table-responsive">
                <table className="table table-bordered mb-0">
                  <thead style={{ height: 50 }}>
                    <tr>
                      <th scope="col" className="text-center align-middle">
                        #
                      </th>
                      <th scope="col" className="align-middle">
                        Product name
                      </th>
                      <th scope="col" className="text-center align-middle">
                        Image
                      </th>
                      <th scope="col" className="text-center align-middle">
                        Org Price
                      </th>
                      <th scope="col" className="text-center align-middle">
                        Sale Price
                      </th>
                      <th scope="col" className="text-center align-middle"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row" className="align-middle text-center">
                            {index + 1}
                          </th>
                          <td className="align-middle">{item.productName}</td>
                          <td className="text-center">
                            <img src={item.img} alt="" height={50} />
                          </td>
                          <td className="text-center align-middle">&#36;{item.orgPrice}</td>
                          <td className="text-center align-middle">
                            {item.salePrice ? `$${item.salePrice}` : ""}
                          </td>
                          <td className="align-middle text-center">
                            <Link
                              to={`/admin/product/${item._id}`}
                              className="btn btn-lg mx-2 btn-outline-primary"
                            >
                              Edit
                            </Link>
                            <button
                              className="btn btn-lg mx-2 btn-outline-danger"
                              onClick={() => handleDeleteProduct(item._id)}
                            >
                              Delete
                            </button>
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

export default AdminProductPage;
