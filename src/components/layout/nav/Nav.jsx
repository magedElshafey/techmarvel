import React from "react";
import style from "./nav.module.css";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import ksa from "../../../assets/ksa.svg";
import usa from "../../../assets/usa.png";
const Nav = ({ data, partners }) => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", JSON.stringify(lng));
  };
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
                  to={`${item.title === "home" ? item.path : `/#${item.path}`}`}
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
        </div>
      </div>
    </div>
  );
};

export default Nav;
