import Header from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Appliances from "./pages/appliances";
import Computing from "./pages/computing";
import Electronics from "./pages/electronics";
import Fashion from "./pages/fashion";
import Gaming from "./pages/gaming";
import HealthBeauty from "./pages/healthBeauty";
import MobileDevices from "./pages/mobileDevice";
import Cart from "./pages/cart";
import LoginSignUp from "./pages/login";
import Product from "./pages/product";
// import ProductDisplay from "./components/productDisplay/productDisplay";
import { CartContextProvider } from "./context/cartContext";
import Notification from "./components/notification/notification";
import SearchResults from "./pages/search";
import { SearchProvider } from "./context/searchContext";
import { LoginPage } from "./pages/login";
import ContactUs from "./pages/contact";



function App() {
  return (
      <SearchProvider>
        <CartContextProvider>
          <Notification />
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/appliances' element={<Appliances />} />
              <Route path='/computing' element={<Computing />} />
              <Route path='/electronics' element={<Electronics />} />
              <Route path='/fashion' element={<Fashion />} />
              <Route path='/gaming' element={<Gaming />} />
              <Route path='/health&beauty' element={<HealthBeauty />} />
              <Route path='/mobile-devices' element={<MobileDevices />} />
              <Route path='/cart' element={<Cart/>} />
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/signUp" element={<LoginSignUp />}/>
              <Route path="/product-details/:id" element={<Product />}/>
              <Route path="/search" element={<SearchResults/>}/>
              <Route path="/contact" element={<ContactUs/>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </SearchProvider>
  );
}

export default App;
