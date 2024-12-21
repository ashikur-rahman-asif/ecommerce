import { Route, Routes } from "react-router";
import AdminLayaout from "./components/admin-view/layout";
import AuthLayout from "./components/auth/layout";
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

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common components  */}

      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/admin" element={<AdminLayaout />}>
          <Route path="dashboard" element={<AdminDashboard />} />{" "}
          <Route path="products" element={<AdminProducts />} />{" "}
          <Route path="orders" element={<AdminOrders />} />{" "}
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
