import React from "react";
import style from "./hero.module.css";
import hero from "../../../assets/hero.webp";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
const Hero = ({ data }) => {
  const swiperOptions = {
    loop: true,
    centeredSlides: false,
    spaceBetween: 0,
    navigation: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 6,
      },
    },
  };
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
          <p className="m-0 p-0 text-black-50 mb-2">{t("trusted ")}</p>
          <Swiper
            className="text-center"
            modules={[Autoplay, Navigation]}
            {...swiperOptions}
          >
            {data.map((item, index) => (
              <SwiperSlide className="text-center" key={index}>
                <img className={style.img} alt="partner/img" src={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
