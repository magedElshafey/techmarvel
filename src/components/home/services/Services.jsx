import React, { useRef } from "react";
import style from "./services.module.css";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Services = ({ data }) => {
  const sliderRef = useRef(null);
  const slickNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const slickPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const { t, i18n } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div id="serv" className={`mb-4 ${style.mainDiv}`}>
      <div className="container py-3">
        <p className={`m-0 p-0 mb-3 text-center ${style.title} fw-bolder`}>
          {t("serv")}
        </p>
        <div className="d-flex justify-content-center align-items-center gap-1 mb-5">
          <p className={`${style.desc} m-0 p-0 fw-bolder`}>{t("convert")}</p>
          <p className={`${style.desc} ${style.desc2} m-0 p-0 fw-bolder`}>
            {t("ideas")}
          </p>
          <p className={`${style.desc} m-0 p-0 fw-bolder`}>{t("reality")}</p>
        </div>
        <div className="controls">
          <button onClick={slickPrev}>
            {i18n.language === "ar" ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
          <button onClick={slickNext}>
            {i18n.language === "ar" ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        </div>
        <Slider
          ref={sliderRef}
          data-aos="fade-up"
          data-aos-delay="500"
          {...settings}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={`p-3 d-flex flex-column align-items-center gap-2 ${style.card}`}
            >
              <img src={item.img} alt="icon" className={style.icon} />
              <p
                className={`m-0 p-0  fw-bolder position-relative mb-3 ${
                  style.cardtitle
                } ${i18n.language === "ar" ? style.rtl : style.ltr}`}
              >
                {i18n.language === "ar" ? item.arTitle : item.enTitle}
              </p>
              <p className="text-black-50 lh text-center m-0 p-0">
                {i18n.language === "ar" ? item.arDesc : item.enDesc}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
