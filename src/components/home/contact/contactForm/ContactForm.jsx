import React, { useRef, useState } from "react";
import style from "./form.module.css";
import * as animationData from "../../../../assets/lotties/ani.json";
import Lottie from "react-lottie";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
const ContactForm = () => {
  const { i18n } = useTranslation();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0jgwia9",
        "template_jbibnrk",
        form.current,
        "slNexUwo_ytc0kZ1W"
      )
      .then(
        (result) => {
          toast.success(
            i18n.language === "ar"
              ? "تم إرسال رسالتك بنجاح"
              : "message sent succfully"
          );
          setName("");
          setEmail("");
          setMsg("");
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };
  return (
    <div className="row align-items-center my-4 justify-content-center">
      <div className="col-12 col-md-6 mb-3 mb-md-0">
        <Lottie
          isClickToPauseDisabled
          options={defaultOptions}
          width={320}
          height={320}
        />
      </div>
      <div className="col-12 col-md-6 mb-3 mb-md-0">
        <form
          ref={form}
          onSubmit={sendEmail}
          className={` ${style.mainContainer} p-3`}
        >
          <div className="mb-3">
            <label htmlFor="name" className="d-block text-black-50 mb-1">
              {i18n.language === "ar" ? "الاسم" : "name"}
            </label>
            <input
              type="text"
              id="name"
              className={style.inp}
              onChange={(e) => setName(e.target.value)}
              value={name}
              name="user_name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="d-block text-black-50 mb-1">
              {i18n.language === "ar" ? "البريد الإلكتروني" : "email"}
            </label>
            <input
              type="email"
              id="email"
              className={style.inp}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="user_email"
            />
          </div>

          <label htmlFor="msg" className="d-block mb-1 text-black-50">
            {i18n.language === "ar" ? "اترك لنا رسالة" : " leave your message"}
          </label>
          <textarea
            id="msg"
            className={`${style.inp} ${style.area}`}
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
            name="message"
          ></textarea>
          <div className="d-flex justify-content-center">
            <button type="submit" className={style.btn}>
              {i18n.language === "ar" ? "ارسال" : "submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
