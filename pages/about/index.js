/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import CountUp from "react-countup";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        exp: "Expertise: ",
        com: "Comfortable: ",
        tol: "Tools: ",
        expertise:
          "Next.js, React.js, JavaScript, ES6, HTML, CSS, SASS, Tailwind, and Bootstrap.",
        comfortable: "Typescript, Node.js, Express.js, MongoDB.",
        tools:
          "Git, NPM, VS Code, Jira, Chrome Dev Tool, Vercel, Heroku, Netlify.",
        // title: "Web Design and Development.",
        // icons: [
        //   <FaHtml5 />,
        //   <FaCss3 />,
        //   <FaJs />,
        //   <FaReact />,
        //   <FaFigma />,
        //   // <SiNextdotjs />,
        //   // <SiFramer />,
        //   // <FaWordpress />,
        // ],
      },
      // {
      //   title: "Web Design",
      //   icons: [
      //   <FaFigma />,
      //   // <SiAdobexd />,
      //   // <SiAdobephotoshop />
      // ],
      // },
    ],
  },
  // {
  //   title: "awards",
  //   info: [
  //     {
  //       title: "Webby Awards - Honoree",
  //       stage: "2011 - 2012",
  //     },
  //     {
  //       title: "Adobe Design Achievement Awards - Finalist",
  //       stage: "2009 - 2010",
  //     },
  //   ],
  // },
  {
    title: "experience",
    info: [
      {
        organisation: "",
        date: "",
        title: "Javascript Developer @Gain Solutions Ltd.",
        stage: "1st September, 2022 - 30th October, 2023",
      },
      {
        organisation: "",
        date: "",
        title: "Frontend Developer @Digital Intelligence System Ltd.",
        stage: "1st November, 2023 - Continue",
      },
      // {
      //   title: "Web Developer - ABC Agency",
      //   stage: "2010 - 2012",
      // },
      // {
      //   title: "Intern - DEF Corporation",
      //   stage: "2008 - 2010",
      // },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Degree: B.Sc. in CSE (2017 - 2021)",
        stage: "University: University of South Asia",
        gpa: "CGPA: 3.90"
      },
      // {
      //   title: "Computer Science Diploma - AV Technical Institute",
      //   stage: "2009",
      // },
      // {
      //   title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
      //   stage: "2006",
      // },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 my-8 text-center xl:text-left"
    style={{
      overflowY: "auto", // Set overflow-y to auto by default
      maxHeight: "none", // Ensure maxHeight is set to none to allow content to expand
      "@media (min-width: 768px)": {
        overflowY: "scroll", // Set overflow-y to scroll for mobile devices
      },
    }}
    >
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            {" "}
            WHO AM <span className="text-accent">I</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 "
          >
            Hello! As a Front-End Web Developer driven by the pursuit of
            excellence, I'm dedicated to developing seamless user experiences
            through innovative and robust code. I thrive in collaborative
            environments, embracing challenges to create elegant solutions and
            elevate the digital landscape.
            <br />
            {/* JavaScript, TypeScript, and ES6 for powerful and dynamic web applications. <br />
            React.js and Next.js for crafting efficient and scalable front-end experiences. <br />
            Proficiency in React Hooks for state management and functional components. <br />
            Extensive knowledge in HTML, CSS, SASS, Tailwind, and Bootstrap for
            crafting responsive and visually appealing interfaces. */}
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  {/* <CountUp start={0} end={1} duration={5} /> */} 1.5 +
                </div>
                <div className="text-xs uppercase tracking-[1px] loading-[1.4] max-w-[100px] ">
                  Years of experience
                </div>
              </div>
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] loading-[1.4] max-w-[100px] ">
                  Satisfied clients
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData?.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={` ${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300 "
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index]?.info?.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0 col-6">
                    {item.title && (
                      <span>
                        <span className="text-lg text-white">
                          
                        {item.title} <br />
                        </span>
                        <span className="text-lg text-white">{item.stage}</span> <br />
                        <span className="text-lg text-white">{item.gpa}</span>
                        
                      </span>
                    )}

                    {item.expertise && (
                      <span>
                        <span className="text-lg text-white">{item.exp} {item.expertise} <br /> </span>
                       
                        <span className="text-lg text-white">{item.com} {item.comfortable} <br /> </span>
                        
                        <span className="text-lg text-white">{item.tol}  {item.tools} </span>
                       
                      </span>
                    )}
                  </div>
                  {/* <div className="hidden md:flex">-</div>
                  <div className="col-6">{item.stage}</div> */}
                  {/* <div className="flex gap-x-4">
                    {item?.icons?.map((icon, itemIndex) => {
                      return (
                        <div className="text-2xl text-white"> {icon} </div>
                      );
                    })}
                  </div> */}
                </div>
              );
            })}
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default About;
