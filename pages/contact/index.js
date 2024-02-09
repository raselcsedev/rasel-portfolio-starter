import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Circles from "./../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(
          'service_7gg7tpx',
          'template_k5a6umh',
          form.current, 'x0XqVtn-06rJqc0Xz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
  };

  return (
    <div className="xl:h-full pt-8 mb-8 xl:mb-0 bg-primary/30 xl:py-36 pb-48" style={{
      overflowY: "auto", 
      maxHeight: "none", 
      "@media (min-width: 768px)": {
        overflowY: "scroll", 
      },
    }}>
      <div className=" container mx-auto xl:py-32 text-center xl:text-left flex items-center justify-center h-full  ">
        <div className=" flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Lets <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto "
          >
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input" />
              <input type="email" placeholder="email" className="input" />
            </div>
            <input type="text" placeholder="subject" className="input" />
            <textarea placeholder="message" className="textarea"></textarea>
            <button
              type="submit"
              className=" btn rounded-full border border-white-50 max-w-[170px] px-8 transition-all duration-300
              flex items-center justify-center overflow-hidden hover:border-accent group "
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300  ">
                lets talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] " />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
