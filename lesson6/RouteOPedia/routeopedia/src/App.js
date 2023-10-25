import "./App.css";
import Header from "./Components/Layout/Header";
//import Footer from "./Components/Layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import CryptoDetail from "./CryptoDetail";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";
import ProductList from "./Pages/ProductList";
import CreateProduct from "./Pages/CreateProduct";
import NotFound from "./NotFound"
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cryptodetail/:cryptoSymbol/:id" element={<CryptoDetail />}></Route>
        <Route path="/cryptodetail/:cryptoSymbol" element={<CryptoDetail />}></Route>
        <Route path="/cryptodetail" element={<CryptoDetail />}></Route>
        <Route path="/product">
          <Route path="" element={<Product />}></Route>
          <Route path="details/:productId" element={<ProductDetails />}></Route>
          <Route path="list" element={<ProductList />}></Route>
          <Route path="create" element={<CreateProduct />}></Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
