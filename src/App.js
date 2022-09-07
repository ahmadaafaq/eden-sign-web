import { Routes, Route, useLocation } from "react-router-dom";

import HomeComponent from "./components/Home/HomeComponent";
import AboutComponent from "./components/About/AboutComponent";
import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import NavBarComponent from "./components/NavBar/NavBarComponent";
import SalonDetailComponent from "./components/SalonDetail/SalonDetailComponent";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }
  console.log('pathname=>', usePathname());
  return (
    <div className="App">
      <NavBarComponent />
      {usePathname() === '/' &&
        <HeaderComponent />
      }
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="about" element={<AboutComponent />} />
        <Route path="salon-detail/:title" element={<SalonDetailComponent />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
