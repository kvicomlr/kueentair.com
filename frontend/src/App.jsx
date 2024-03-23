import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
// import List from "./pages/List";
// import Hotel from "./pages/hotel/Hotel";
// import Package from "./pages/Package";
// import Search from "./pages/Search";
// import Dashboard from "./pages/Dashboard";

const Kueen = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        {/* <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        /> */}
        {/* <Route
          path="/search"
          element={
            <Layout>
              <Search />
            </Layout>
          }
        /> */}
        {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}

        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        {/* <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        /> */}
        {/* <Route
          path="/package"
          element={
            <Layout>
              <Package />
            </Layout>
          }
        /> */}
        {/* <Route
          path="/hotels"
          element={
            <Layout>
              <List />
            </Layout>
          }
        /> */}
        {/* <Route
          path="/hotels/:id"
          element={
            <Layout>
              <Hotel />
            </Layout>
          }
        /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default Kueen;
