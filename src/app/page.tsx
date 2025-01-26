import React from "react";
import * as motion from "motion/react-client";
import { ThreeBackground } from "./components/ThreeBackground";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen  flex  items-end justify-start">
      <ThreeBackground />
      {/* Hero */}
      <div className="z-10 pt-20 pl-5 pb-10 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 "
        >
          <h1 className="text-8xl font-bold mb-3 bg-clip-text text-white font-times ">
            HydroRoll
          </h1>
          <p
            className="text-lg text-white font-bold max-w-2xl mx-auto w-full text-left font-times"
            style={{ letterSpacing: "0.1em" }}
          >
            Infinity Rule Book 📖 ~ (Or Rules Packages?)
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
