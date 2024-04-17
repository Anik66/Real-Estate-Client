import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx/Footer";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <div >
      <Navbar></Navbar>
      <ToastContainer></ToastContainer>
       <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
