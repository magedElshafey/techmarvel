import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import Home from "./pages/Home";
import Nav from "./components/layout/nav/Nav";
import { navLinks, partners, why } from "./data/data";
const App = () => {
  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(i18n.language));
  }, []);
  const { i18n } = useTranslation();
  // handle language
  useEffect(() => {
    document.documentElement.setAttribute("lang", i18n.language);
    if (i18n.language === "ar") {
      document.getElementsByTagName("body")[0].style.direction = "rtl";
    } else {
      document.getElementsByTagName("body")[0].style.direction = "ltr";
    }
  }, [i18n.language]);
  // handle animation
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 1200,
    });
  }, []);
  return (
    <div>
      <Router>
        <Nav data={navLinks} />
        <Routes>
          <Route path="/" element={<Home partners={partners} why={why} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
