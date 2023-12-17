import React from "react";
import style from "./about.module.css";
import { useTranslation } from "react-i18next";
const About = ({ data }) => {
  const { i18n, t } = useTranslation();
  return (
    <div id="about" className={`mb-3 ${style.mainDiv}`}>
      <div className="container py-3">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <img
              src={data.img}
              alt="about/img"
              className={style.mainImg}
              data-aos="zoom-in"
              data-aos-delay="500"
            />
          </div>
          <div className="col-12 col-md-6">
            <p className={`m-0 p-0 mb-3 fw-bolder ${style.title}`}>
              {i18n.language === "ar" ? data.arTitle : data.enTitle}
            </p>
            <p className={`m-0 p-0  text-black-50 lh ${style.desc}`}>
              {i18n.language === "ar" ? data.arDesc : data.enDesc}
            </p>
            <button
              className={`d-flex align-items-center justify-content-center ${style.btn} rounded-pill mx-auto`}
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
        </div>
      </div>
    </div>
  );
};

export default About;
