// src/Router.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from '../../src/components/home/Product';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import AllProducts from '../pages/AllProducts';
import OrderHistory from '../pages/OrderHistory';
import AddCart from '../pages/AddCart';
import ByBrand from '../pages/ByBrand';
import ByType from '../pages/ByType';
import SpecialDeals from '../pages/SpecialDeals';
import Collections from '../pages/ByTypeCollections/Collections';
import BrandCollections from '../pages/ByBrandCollections/BrandCollections';
import Bevereges from '../pages/Bevereges';
import FeaturedNew from '../pages/FeaturedNew';
import FakePaymentGateway from '../pages/FakePayment/fakePayment';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/orderHistory" element={<OrderHistory />} />
      <Route path="/cart" element={<AddCart />} />
      <Route path="/bybrand" element={<ByBrand />} />
      <Route path="/bytype" element={<ByType />} />
      <Route path="/specialdeals" element={<SpecialDeals />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/brandcollections" element={<BrandCollections />} />
      <Route path="/bevereges" element={<Bevereges />} />
      <Route path="/featurednew" element={<FeaturedNew />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<AddCart />} />
      <Route path="/fakepaymentgateway" element={<FakePaymentGateway />} />
    </Routes>
  );
}

export default Router;
