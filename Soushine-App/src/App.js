import "bootstrap/dist/css/bootstrap.min.css";
import MyRoutes from "./routes";
import "./App.css";
import Message, { handleMessage } from "./components/Message";
import { useEffect } from "react";
import Loader from "./components/Loader";
import { useDispatch } from "react-redux";
import { setLoading } from "./redux/slice/loadingSlice";
import { setProductList } from "./redux/slice/productListSlice";

const App = () => {
  const dispatch = useDispatch();

  const handleGetProductList = async () => {
    try {
      dispatch(setLoading(true));
      const resultGetProductListApi = await fetch("http://localhost:8080/product");
      const data = await resultGetProductListApi.json();
      dispatch(setProductList(data));
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
    <>
      <Message />
      <MyRoutes />
      <Loader />
    </>
  );
};

export default App;
