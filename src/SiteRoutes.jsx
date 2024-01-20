import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import ProductLayout from "./products/ProductLayout.jsx";
import Products from "./products/Products.jsx";
import Category from "./products/Category.jsx";
import Product from "./products/Product.jsx";
import Login from "./pages/Login.jsx";
import Fav from "./pages/Fav.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

function SiteRoutes({ handleLogin, user }) {
  return (
    <Routes>
      <Route path="/" element={<Home user={user} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<ProductLayout />}>
        <Route index={true} element={<Products user={user} />} />
        <Route
          path="category/:categoryName"
          element={<Category user={user} />}
        />
        <Route path="product/:productId" element={<Product user={user} />} />
      </Route>
      <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      <Route
        path="/fav"
        element={
          <PrivateRoute user={user}>
            <Fav user={user} />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default SiteRoutes;
