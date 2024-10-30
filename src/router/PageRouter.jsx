import { Routes, Route } from "react-router-dom";
import { Paths } from "./Paths";
import { MainLayout } from "../Layouts/MainLayout";
import { LandingPage } from "../pages/LandingPage";
import { ProductsPage } from "../pages/ProductsPage";
import { ProductPage } from "../pages/ProductPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { LoginPage } from "../pages/LoginPage";
import { PageNotFound } from "../pages/PageNotFound";
import { SignUpPage } from "../pages/SignUpPage";
import { useState } from "react";
import { CookiePolicyPage } from "../pages/CookiePolicyPage";

export const PageRouter = () => {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path={Paths.home} element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path={Paths.products} element={<ProductsPage />} />
        <Route path={Paths.product} element={<ProductPage />} />
        <Route path={Paths.checkout} element={<CheckoutPage />} />
        <Route path={Paths.login} element={<LoginPage user={user} setUser={setUser} />} />
        <Route path={Paths.signUp} element={<SignUpPage user={user} setUser={setUser} />} />
        <Route path={Paths.cookiePolicy} element={<CookiePolicyPage />}/>
        <Route path={Paths.pageNotFound} element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
