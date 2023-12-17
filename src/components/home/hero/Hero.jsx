import React, { useRef } from "react";
import style from "./hero.module.css";
import hero from "../../../assets/hero.webp";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="container mb-4">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <img className={style.mainImg} alt="hero/img" src={hero} />
        </div>
        <div className="col-12 col-md-6">
          <p className={`m-0 p-0 ${style.title} mb-2`}>{t("wecan")}</p>
          <p className="m-0 p-0 text-black-50 mb-2">{t("contact")}</p>
          <button className={`${style.btn} rounded-pill mb-3`}>
            <a
              className="text-white"
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
  );
};

export default Hero;
