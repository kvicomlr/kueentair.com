// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

// import Hero from "../components/Hero";

const Layout = ({ children }) => {
  return (
    <div className=" ">
      <Header />
      {/* <ToastContainer /> */}

      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
