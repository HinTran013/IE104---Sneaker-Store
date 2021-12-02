import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import CartPage from "./pages/CartPage";
import Page404 from "./pages/ErrorPage";
import ContactUs from "./pages/ContactUs";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";

import React from "react";
import { ToastContainer, Bounce } from "react-toastify";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route exact path="/product" component={ProductPage} />
          <Route
            exact
            path="/product/find/:findString"
            component={ProductPage}
          />
          <Route exact path="/product/Nike" component={ProductPage} />
          <Route exact path="/product/Adidas" component={ProductPage} />
          <Route exact path="/product/Puma" component={ProductPage} />
          <Route exact path="/product/Jordan" component={ProductPage} />
          <Route exact path="/product/NewBalance" component={ProductPage} />
          <Route exact path="/product/Converse" component={ProductPage} />
          <Route exact path="/product/:id" component={ProductDetail} />
          <Route path="/about-us" component={AboutUsPage} />
          <Route path="/blog" component={Page404} />
          <Route path="/cart" component={CartPage} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
        <Footer />
      </Router>
      {/* Toast Message for all over the web app */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
      />
    </React.Fragment>
  );
}

export default App;
