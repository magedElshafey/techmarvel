import React from "react";
import style from "./contact.module.css";
import { useTranslation } from "react-i18next";
import ContactForm from "./contactForm/ContactForm";

const Contact = ({ data }) => {
  const { t, i18n } = useTranslation();

  return (
    <div id="contact" className="container">
      <p className={`fs-3 m-0 p-0 mb-3 text-center fw-bolder ${style.title}`}>
        {t("page")}
      </p>
      <div className="row justify-content-between">
        <div className="col-12">
          <div className="row gap-5 justify-content-center align-items-center my-4 ">
            {data.map((item, index) => (
              <div
                data-aos="zoom-in"
                data-aos-delay={item.delay}
                className={`col-12 col-md-5 ${style.bg}`}
                key={index}
              >
                <div className={style.card}>
                  <div className={`mb-3 ${style.imgContainer}`}>
                    <img alt="icon" src={item.img} className={style.img} />
                  </div>
                  <p className="fw-bold fs-5 m-0 p-0 mb-3">
                    {i18n.language === "ar" ? item.arTitle : item.enTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
