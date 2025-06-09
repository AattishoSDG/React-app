import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServicesLevelTwo from "./pages/ServicesLevelTwo";
import ServicesLevelThree from "./pages/ServicesLevelThree";
import SEOPortfolioDetail from "./pages/SEOPortfolioDetail";
import WebPortfolio from "./pages/WebPortfolio";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
//import GetQuote from "./pages/GetQuote";
//import Test from "./pages/Test";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "./css/res.css";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

export default function App() {

  // const location = useLocation();
  // useEffect(() => {
  //   const setScrollbarHeight = () => {
  //     const scrollbarHeight =
  //       window.innerHeight - document.documentElement.clientHeight;
  //     document.documentElement.style.setProperty(
  //       "--scrollbar-height",
  //       `${scrollbarHeight}px`
  //     );
  //   };

  //   setScrollbarHeight(); // Initial execution
  //   window.addEventListener("resize", setScrollbarHeight); // Update on resize

  //   return () => {
  //     window.removeEventListener("resize", setScrollbarHeight); // Cleanup on unmount
  //   };
  // }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds (or adjust time as needed)
    }, 1000); // Adjust timeout duration as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);
  return (
    <>
      <BrowserRouter>
        <Loader loading={loading} />
        <ScrollToTop />
        {!loading && (
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="services-level-two" element={<ServicesLevelTwo />} />
              <Route
                path="services-level-three"
                element={<ServicesLevelThree />}
              />
              <Route path="contact" element={<Contact />} />
              {/* <Route path="get-a-quote" element={<GetQuote />} /> */}
              <Route path="seo-detail" element={<SEOPortfolioDetail />} />
              <Route path="web-detail" element={<WebPortfolio />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="*" element={<NotFound />} />
              {/* <Route path="test" element={<Test />} /> */}
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  // console.log(pathname);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // Use 'auto' for immediate scrolling without smooth animation
    });
  }, [pathname]);
  return null;
}
