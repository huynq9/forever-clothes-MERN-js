import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import PlaceOder from "./pages/PlaceOder";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vh] md:px-[7vh] lg:px-[9vh]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
