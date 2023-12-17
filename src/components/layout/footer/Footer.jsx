import React from "react";
import style from "./footer.module.css";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaSnapchat, FaTiktok } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
const Footer = ({ data }) => {
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <div className={style.mainDiv}>
      <div className="container">
        <div className="py-4 d-flex flex-column align-items-center justify-content-center gap-4">
          <p className={`${style.intro} m-0 p-0 fw-bolder text-white`}>
            {t("here")}
          </p>
          <button
            className={`d-flex justify-content-center align-items-center rounded-pill ${style.btn}`}
          >
            <a
              className="text-white fw-bold"
              href="https://www.facebook.com/brandsclub100?mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              {t("page")}
            </a>
          </button>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 mb-3 mb-md-0"></div>
          <div className="col-12 col-md-4 mb-3 mb-md-0"></div>
          <div className="col-12 col-md-4"></div>
        </div>
      </div>
      <div className={`${style.line}`}></div>
      <div className="container mb-3">
        <div className="pt-3 row justify-content-center">
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <p className="fw-bolder text-white m-0 p-0 mb-3 fs-1 text-center text-md-start">
              Logo
            </p>
            <p
              className={`m-0 p-0 text-white-50 ${style.desc} text-center text-md-start`}
            >
              {t("data")}
            </p>
          </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-center">
            <div>
              <p className="fw-bolder text-white m-0 p-0 mb-3 fs-2">
                {t("page")}
              </p>
              <a
                href="mailto:techmarvel10@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="d-block text-white-50 mb-2 text-lowercase"
              >
                techmarvel10@gmail.com
              </a>
              <a
                href="https://wa.me/+201019846513"
                target="_blank"
                rel="noreferrer"
                className="d-block text-white-50 mb-2 text-lowercase"
              >
                +201019846513
              </a>
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="facebook.com"
                  className={style.socialContainer}
                >
                  <FaFacebookF size={20} className={style.icon} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="instagram.com"
                  className={style.socialContainer}
                >
                  <FaInstagram size={20} className={style.icon} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="tiktok.com"
                  className={style.socialContainer}
                >
                  <FaTiktok size={20} className={style.icon} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="snapchat.com"
                  className={style.socialContainer}
                >
                  <FaSnapchat size={20} className={style.icon} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex  justify-content-center justify-content-md-end">
            <div>
              <p className="fw-bolder text-white m-0 p-0 mb-3 fs-2">
                {t("links")}
              </p>
              <ul className="p-0 m-0 ">
                {data.map((item, index) => (
                  <li key={index} className="mb-2">
                    <HashLink
                      key={index}
                      className="text-white-50"
                      to={`${
                        item.title === "Home" ? item.path : `/#${item.path}`
                      }`}
                    >
                      {i18n.language === "ar" ? item.arTitle : item.title}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.line}`}></div>
      <div className="container mt-2">
        <div className="m-0 p-0 py-2 d-flex justify-content-center">
          {i18n.language === "ar" ? (
            <p className="m-0 p-0 text-white-50">
              جميع الحقوق محفوظة &copy; لشركة Techmarvel
            </p>
          ) : (
            <p className="m-0 p-0 text-white-50">
              Copyright &copy; Techmarvel {year}. All Rights Reserved.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
