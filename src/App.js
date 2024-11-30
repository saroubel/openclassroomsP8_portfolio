import React, { useState } from "react";
import * as Icon from "react-feather";
import "./App.scss";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Portfolios from "./pages/Portfolios";
import Resumes from "./pages/Resumes";
// import { RouterProvider } from "react-router-dom";
// import { createBrowserRouter } from "react-router-dom";
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

  
function App() {

// light mode
  const [lightMode, setLightMode] = useState(false);    // True si on veut mode light par default , false pour le mode dark

  lightMode
    ? document.body.classList.add("light")
    : document.body.classList.remove("light");

  const handleMode = () => {
    if (!lightMode) {
      setLightMode(true);
      document.body.classList.add("light");
    } else {
      setLightMode(false);
      document.body.classList.remove("light");
    }
  };

// routage
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home lightMode={lightMode} />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  //   {
  //     path: "/resume",
  //     element: <Resumes />,
  //   },
  //   {
  //     path: "/portfolios",
  //     element: <Portfolios />,
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact />,
  //   },
  //   {
  //     path: "*",
  //     element: <Notfound />,
  //   },
  // ]);


  return (
    <>
      <div className="light-mode">
        <span className="icon">
          <Icon.Sun />
        </span>
        <button
          className={
            lightMode ? "light-mode-switch active" : "light-mode-switch"
          }
          onClick={() => handleMode()}
        ></button>
      </div>
      {/* <RouterProvider router={router} /> */}

      <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home lightMode={lightMode} />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resumes/>} />    
        <Route path="/portfolios" element={<Portfolios/>} />    
        <Route path="/contact" element={<Contact/>} />    
        <Route path="*" element={<Notfound />} />                      
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
