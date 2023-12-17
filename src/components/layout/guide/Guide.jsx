import React from "react";
import style from "./guide.module.css";
import { useTranslation } from "react-i18next";
const Guide = () => {
  const { t } = useTranslation();
  return (
    <div className={style.mainContainer}>
      <div className="container py-3">
        <p className={`m-0 p-0 ${style.title} fs-4 mb-1 fw-bolder`}>
          {t("guide")}
        </p>
        <p className="m-0 p-0">{t("speed")}</p>
      </div>
    </div>
  );
};

export default Guide;
