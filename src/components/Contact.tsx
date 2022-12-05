import { AiTwotoneMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion, Variants } from "framer-motion";
import React from "react";

function Contact() {
  const variants: Variants = {
    offscreen: {
      y: "120"
    },
    onscreen: i => ({
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
        delay: i * 0.05
      }
    })
  };

  const rootRef = React.useRef(null);

  return (
    <div className="text-center overflow-y-hidden">
      <div ref={rootRef} className="heading my-24 mt-36">
        Contact<div className="underline"></div>
      </div>
      <div className="px-5">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={variants}
          custom={0}
          className="text-xl text-center max-w-[600px] mx-auto mb-10"
        >
          Have a question or want to work together? Email me and I'll get back
          to you as soon as possible.
        </motion.div>
        <div className="text-3xl font-bold text-light-blue flex flex-col gap-10 max-w-[350px] text-left mb-24 mx-auto">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={variants}
            custom={1}
            className="flex justify-between items-center"
          >
            <span className="align-middle">Email:&nbsp;</span>
            <a
              href="mailto:yu.ka.wing.alex@gmail.com"
              className="tap-highlight-transparent cursor-pointer align-middle"
              target="_blank"
            >
              <AiTwotoneMail className="text-5xl"></AiTwotoneMail>
            </a>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={variants}
            custom={2}
            className="flex justify-between items-center"
          >
            <span className="align-middle">LinkedIn:&nbsp;</span>
            <a
              href="https://www.linkedin.com/in/alex-yu-340383247/"
              className="tap-highlight-transparent cursor-pointer align-middle"
              target="_blank"
            >
              <AiFillLinkedin className="text-5xl"></AiFillLinkedin>
            </a>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={variants}
            custom={3}
            className="flex justify-between items-center"
          >
            <span className="align-middle">GitHub:&nbsp;</span>
            <a
              href="https://github.com/YuKaWing?tab=repositories"
              className="tap-highlight-transparent cursor-pointer align-middle"
              target="_blank"
            >
              <AiFillGithub className="text-5xl"></AiFillGithub>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
