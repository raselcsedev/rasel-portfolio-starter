import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";

// export const serviceData = [
//   {
//     icon: <RxCrop />,
//     title: "Branding",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <RxPencil2 />,
//     title: "Design",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <RxDesktop />,
//     title: "Development",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <RxReader />,
//     title: "Copywriting",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <RxRocket />,
//     title: "SEO",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
// ];

import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div
      className="xl:h-full pt-8 xl:pt-0 mb-8 xl:mb-0 bg-primary/30 xl:py-36 flex items-center"
      style={{
        overflowY: "auto", // Set overflow-y to auto by default
        maxHeight: "none", // Ensure maxHeight is set to none to allow content to expand
        "@media (min-width: 768px)": {
          overflowY: "scroll", // Set overflow-y to scroll for mobile devices
        },
      }}
    >
      <Circles />
      <div className="container mx-auto">
        <div className="flex items-center flex-col xl:flex-row gap-x-8">
          <div className="flex xl:w-[50vw] flex-col text-left mb-4 xl:mb-0 ">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="xl:text-3xl sm:text-xl"
            >
              My Services <span className="text-accent ">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 mx-auto xl:text-lg sm:text-sm lg:mx-0"
            >
              <span className="">
                <span className="text-accent ">01.</span> Crafting visually
                stunning and responsive websites to ensure optimal viewing
                experiences across all devices.
              </span>{" "}
              <br />
              <span className="">
                <span className="text-accent ">02.</span> Utilizing the power of
                React.js and Next.js to build dynamic and scalable web
                applications.
              </span>
              <br />
              <span className="">
                <span className="text-accent ">03.</span> Implementing modular
                and reusable components for streamlined development and
                maintenance.
              </span>{" "}
              <br />
              <span className=" ">
                <span className="text-accent ">04.</span> Optimizing website
                performance for speed and efficiency.
              </span>
              <br />
              <span className=" ">
                <span className="text-accent ">05.</span> Ensuring seamless
                functionality and consistent appearance across various browsers
                for a broader audience reach.
              </span>
              <br />
              <span className="">
                <span className="text-accent ">06.</span> Thriving in
                collaborative environments to tackle challenges and deliver
                elegant solutions that elevate digital experiences.
              </span>
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[40%] "
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
