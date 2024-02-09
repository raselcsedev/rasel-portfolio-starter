import WorkSlider from "../../components/WorkSlider";
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 xl:py-36  flex xl:items-center pt-4 xl:pt-0 mb-24 xl:mb-0"  style={{
      overflowY: "auto", 
      maxHeight: "none", 
      "@media (min-width: 768px)": {
        overflowY: "scroll", 
      },
    }}>
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          {/* <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ">
            <motion.h2 
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xl:mt-12">
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            
            className="mb-4 max-w-[400px] mx-auto lg:mx-0 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam sed numquam porro harum quaerat in. Tempora rerum fuga consectetur?
            </motion.p> 
          </div> */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full"
          >
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-3xl xl:ml-10 xl:mt-12 "
            >
              My Projects<span className="text-accent">.</span>
            </motion.h2>
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
