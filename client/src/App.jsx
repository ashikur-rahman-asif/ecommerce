import { Route, Routes } from "react-router";
import AuthLayout from "./components/auth/layout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common components  */}
      <h1>Header components</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
