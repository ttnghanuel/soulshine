import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import DetailPage from "../pages/DetailPage";
import CheckoutPage from "../pages/CheckoutPage";
import DiscoverPage from "../pages/DiscoverPage";
import ScrollToTop from "../components/ScrollToTop";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import PaymentPage from "../pages/PaymentPage";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import AdminProductPage from "../pages/AdminProductPage";
import AdminCreateProductPage from "../pages/AdminCreateProductPage";
import AdminOrderPage from "../pages/AdminOrderPage";
import AdminUpdateProductPage from "../pages/AdminUpdateProductPage";
import AdminOrderDetail from "../pages/AdminOrderDetailPage";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:id" element={<DetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/discover-quiz" element={<DiscoverPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin/product" element={<AdminProductPage />} />
        <Route path="/admin/product/:id" element={<AdminUpdateProductPage />} />
        <Route path="/admin/product/create" element={<AdminCreateProductPage />} />
        <Route path="/admin/order" element={<AdminOrderPage />} />
        <Route path="/admin/order/:id" element={<AdminOrderDetail />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
};

export default MyRoutes;
