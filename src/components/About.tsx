import TechItem from "./TechItem";
import { motion, Variants } from "framer-motion";

function About() {
  const itemVariants: Variants = {
    offscreen: {
      x: "95%"
    },
    onscreen: i => ({
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
        delay: i * 0.05
      }
    })
  };

  const techs = [
    {
      imgSrc: require("@/assets/icons/javascript.png"),
      name: "Javascript",
    },
    {
      imgSrc: require("@/assets/icons/html5.png"),
      name: "HTML5",
    },
    {
      imgSrc: require("@/assets/icons/css3.png"),
      name: "CSS3",
    },
    {
      imgSrc: require("@/assets/icons/react.png"),
      name: "React",
    },
    {
      imgSrc: require("@/assets/icons/angular.png"),
      name: "Angular",
    },
    {
      imgSrc: require("@/assets/icons/vue.png"),
      name: "Vue",
    },
    {
      imgSrc: require("@/assets/icons/typescript.png"),
      name: "Typescript",
    },
    {
      imgSrc: require("@/assets/icons/tailwind.png"),
      name: "Tailwind",
    },
    {
      imgSrc: require("@/assets/icons/ionic.png"),
      name: "Ionic",
    },
    {
      imgSrc: require("@/assets/icons/java.png"),
      name: "Java",
    },
    {
      imgSrc: require("@/assets/icons/python.png"),
      name: "Python",
    },
    {
      imgSrc: require("@/assets/icons/php.png"),
      name: "php",
    },
    {
      imgSrc: require("@/assets/icons/mysql.png"),
      name: "MySQL",
    },
    {
      imgSrc: require("@/assets/icons/nodejs.png"),
      name: "Node.js",
    },
    {
      imgSrc: require("@/assets/icons/laravel.png"),
      name: "Laravel",
    },
    {
      imgSrc: require("@/assets/icons/codeigniter.png"),
      name: "Codeigniter",
    },
    {
      imgSrc: require("@/assets/icons/git.png"),
      name: "Git",
    },
    {
      imgSrc: require("@/assets/icons/unity.png"),
      name: "Unity",
    },
  ];

  const techItems = techs.map((tech, index) => (
    <TechItem imgSrc={tech.imgSrc} name={tech.name} variants={itemVariants} custom={index} key={index}></TechItem>
  ));

  const descriptionVariants: Variants = {
    offscreen: {
      x: "-95%"
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      }
    }
  };

  return (
    <div className="text-center">
      <div className="heading my-24">About me<div className="underline"></div></div>
      <div className="flex items-center px-5 max-tablet:flex-col overflow-x-hidden pb-2">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={descriptionVariants}
          className="text-xl text-coolGray-700 pr-1 w-2/5 max-tablet:w-full max-tablet:mb-7"
        >
          As a Hong Kong Polytechnic University Graduate from Internet &
          Multimedia Technology, I have experience of working across the
          full-stack of software development. I can grow and continue to learn
          from other experienced teams with implementation of real-world
          industry best practices. I keep up with new challenges in the dynamic
          IT Industry for my career.
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={itemVariants}
          className="flex gap-3 flex-wrap justify-evenly w-3/5 max-tablet:w-full"
        >
          {techItems}
        </motion.div>
      </div>
    </div>
  );
}

export default About;
