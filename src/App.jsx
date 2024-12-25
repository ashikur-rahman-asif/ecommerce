import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import AdminLayaout from "./components/admin-view/layout";
import AuthLayout from "./components/auth/layout";
// import CheckAuth from "./components/common/check-auth";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import CheckAuth from "./components/common/check-auth";
import ShoppingLayout from "./components/shopping-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminFeatures from "./pages/admin-view/features";
import AdminOrders from "./pages/admin-view/orders";
import AdminProducts from "./pages/admin-view/products";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import NotFound from "./pages/not-found";
import ShoppingAccount from "./pages/shopping-view/account";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/product-listing";
import AccessDenied from "./pages/unauth-page";
import { checkAuth } from "./store/auth-slice";

function App() {
  const { isAuthenticated, user, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "white",
        }}>
        <ClipLoader size={60} color="#4A90E2" />
      </div>
    );

  console.log(isLoading, user);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common components  */}

      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayaout />
            </CheckAuth>
          }>
          <Route path="dashboard" element={<AdminDashboard />} />{" "}
          <Route path="products" element={<AdminProducts />} />{" "}
          <Route path="orders" element={<AdminOrders />} />{" "}
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/unauth-page" element={<AccessDenied />} />
      </Routes>
    </div>
  );
}

export default App;
