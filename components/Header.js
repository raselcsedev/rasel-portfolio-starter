
import Socials from "../components/Socials";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Header = () => {
  return (
    <header className="xl:absolute z-30 w-full flex items-center xl:px-0 xl:h-[90px]">
      <div className="container mx-auto ">
        <div className="flex flex-row justify-between items-center gap-y-6 py-8">
                <motion.h1
                  variants={fadeIn("down", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="text-xl xl:text-4xl font-extrabold"
                >
                  Md. Rasel Aktar
                </motion.h1>
              
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
