import React from "react";
import style from "./why.module.css";
import { useTranslation } from "react-i18next";
const Why = ({ data }) => {
  const { i18n, t } = useTranslation();
  return (
    <div id="why" className="container mb-4">
      <h2 className="m-0 p-0 mb-4 text-center fw-bolder">{t("why")}</h2>
      <div className="d-flex flex-wrap align-items-center justify-content-center gap-5">
        {data.map((item, index) => (
          <div
            data-aos="fade-down"
            data-aos-delay={item.delay}
            key={index}
            className={style.card}
          >
            <div className="d-flex flex-column align-items-center">
              <div
                className={`d-flex align-items-center justify-content-center mb-2 ${style.imgContainer}`}
              >
                <img src={item.img} alt="icon/img" className={style.img} />
              </div>
              <div>
                <p className="m-0 p-0 fw-bold mb-2 fs-5 text-center">
                  {i18n.language === "ar" ? item.arTitle : item.enTitle}
                </p>
                <p className="m-0 p-0 px-2 lh text-black-50 text-center">
                  {i18n.language === "ar" ? item.arDesc : item.enDesc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
