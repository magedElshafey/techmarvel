import React, { useState } from "react";
import style from "./nav.module.css";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import ksa from "../../../assets/ksa.svg";
import usa from "../../../assets/usa.png";
// icons
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
const Nav = ({ data }) => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", JSON.stringify(lng));
  };
  const [showSidebar, setShowSidebar] = useState(false);
  const handleShowSidebar = () => setShowSidebar(!showSidebar);
  return (
    <div
      data-aos="fade-down"
      data-aos-delay="400"
      className={style.navContainer}
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="fw-bolder fs-1">Logo</h1>
          <ul className="m-0 p-0 d-none d-md-flex align-items-center gap-4">
            {data.map((item, index) => (
              <li key={index}>
                <HashLink
                  className={style.navLink}
                  to={`${item.title === "Home" ? item.path : `/#${item.path}`}`}
                >
                  {i18n.language === "ar" ? item.arTitle : item.title}
                </HashLink>
              </li>
            ))}
            <li>
              <div className="dropdown">
                <button
                  className="dropdown-toggle dropmenu"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {i18n.language === "ar" ? (
                    <img
                      alt="language/img"
                      className={style.langImg}
                      src={ksa}
                    />
                  ) : (
                    <img
                      alt="language/img"
                      className={style.langImg}
                      src={usa}
                    />
                  )}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <span
                      onClick={() => changeLanguage("ar")}
                      className="dropdown-item pointer"
                    >
                      {i18n.language === "ar" ? "العربية" : "AR"}
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => changeLanguage("en")}
                      className="dropdown-item pointer"
                    >
                      {i18n.language === "ar" ? "الانجليزية" : "EN"}
                    </span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="d-md-none">
            <AiOutlineMenu
              className={`pointer ${style.menu}`}
              onClick={handleShowSidebar}
              size={40}
            />
          </div>
        </div>
        <div
          className={`${style.sidebar} ${
            showSidebar ? style.show : style.hide
          }`}
        >
          <div className="p-3">
            <IoClose
              size={30}
              className={`pointer ${style.close}`}
              onClick={handleShowSidebar}
            />

            <ul className="p-0 m-0 ">
              {data.map((item, index) => (
                <li
                  onClick={handleShowSidebar}
                  key={index}
                  className={`${style.mobList} pb-3 mt-3`}
                >
                  <HashLink
                    key={index}
                    className={style.mobLink}
                    to={`${
                      item.title === "Home" ? item.path : `/#${item.path}`
                    }`}
                  >
                    {i18n.language === "ar" ? item.arTitle : item.title}
                  </HashLink>
                </li>
              ))}
              <li className="mt-3 d-flex align-items-center justify-content-between">
                <span className={style.mobLink}>
                  {i18n.language === "en" ? "change language" : "تغيير اللغة"}
                </span>
                <div className="dropdown">
                  <button
                    className="dropdown-toggle dropmenu"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {i18n.language === "ar" ? (
                      <img
                        alt="language/img"
                        className={style.langImg}
                        src={ksa}
                      />
                    ) : (
                      <img
                        alt="language/img"
                        className={style.langImg}
                        src={usa}
                      />
                    )}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <span
                        onClick={() => changeLanguage("ar")}
                        className="dropdown-item pointer"
                      >
                        {i18n.language === "ar" ? "العربية" : "AR"}
                      </span>
                    </li>
                    <li>
                      <span
                        onClick={() => changeLanguage("en")}
                        className="dropdown-item pointer"
                      >
                        {i18n.language === "ar" ? "الانجليزية" : "EN"}
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
