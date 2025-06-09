// import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import Services from "./pages/Services";
import ServicesLevelTwo from "./pages/ServicesLevelTwo";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "./css/res.css";
import ServicesLevelThree from "./pages/ServicesLevelThree";
// import Test from "./pages/Test";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/services", element: <Services /> },
        { path: "/contact", element: <Contact /> },
        { path: "/get-a-quote", element: <GetQuote /> },
        { path: "/services-two", element: <ServicesLevelTwo /> },
        { path: "/services-three", element: <ServicesLevelThree /> },
        // { path: "/test", element: <Test /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
