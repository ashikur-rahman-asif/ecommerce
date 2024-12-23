// import { Navigate, useLocation } from "react-router";

// const CheckAuth = ({ isAuthenticated, user, children }) => {
//   const location = useLocation();

//   if (
//     (!isAuthenticated && !location.pathname.includes("/login")) ||
//     location.pathname.includes("/register")
//   ) {
//     return <Navigate to="/auth/login" />;
//   }

//   if (!isAuthenticated && !location.pathname.includes("/login")) {
//     if (user?.role === "admin") {
//       return <Navigate to="/admin/dashboard" />;
//     } else {
//       return <Navigate to="/shop/home" />;
//     }
//   }

//   if (
//     isAuthenticated &&
//     user?.role !== "admin" &&
//     location.pathname.includes("admin")
//   ) {
//     return <Navigate to="/unauth-page" />;
//   }

//   if (
//     isAuthenticated &&
//     user?.role == "admin" &&
//     location.pathname.includes("shop")
//   ) {
//     return <Navigate to="/admin/dashboard" />;
//   }
//   return <>{children}</>;
// };

// export default CheckAuth;

import { Navigate, useLocation } from "react-router";

const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();
  const { pathname } = location;

  // Redirect unauthenticated users to login or register
  if (!isAuthenticated) {
    if (!pathname.includes("/login") && !pathname.includes("/register")) {
      return <Navigate to="/auth/login" />;
    }
  } else {
    // Redirect based on user roles
    if (user?.role === "admin") {
      if (pathname.includes("/shop")) {
        return <Navigate to="/admin/dashboard" />;
      }
    } else if (user?.role !== "admin") {
      if (pathname.includes("/admin")) {
        return <Navigate to="/unauth-page" />;
      }
    }
  }

  // Render children if all checks pass
  return <>{children}</>;
};

export default CheckAuth;
