import "../styles/globals.css";

import Layout from "../components/Layout";
import Transition from "../components/Transition";

import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full"
        style={{
          overflowY: "auto", // Set overflow-y to auto by default
          maxHeight: "none", // Ensure maxHeight is set to none to allow content to expand
          "@media (max-width: 767px)": {
            overflowY: "scroll", // Set overflow-y to scroll for mobile devices
          },
        }}>
          <Transition />
          <Component {...pageProps} />;
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
