import React, { useEffect } from "react";
import "./loader.css";
import { useSelector } from "react-redux";

function Loader() {
  const isLoading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <div className="loader d-flex align-items-center justify-content-center">
          <div className="custom-loader"></div>
        </div>
      )}
    </>
  );
}

export default Loader;
