import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import PricingPage from "./pages/prices/Prices";
import HomePage from "./pages/home/Home";
import PortfolioPage from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/pricing" element={<PricingPage />}></Route>
          <Route path="/portfolio" element={<PortfolioPage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
