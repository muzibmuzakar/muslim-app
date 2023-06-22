import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AlquranSingle = ({ number, name, arabic, translation, ayat }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link to={`${number}`}>
      <div className="rounded-md shadow-lg hover:shadow-xl cursor-pointer px-4 mb-10 sm:mb-0 bg-secondary-light dark:bg-slate-800">
        <div className="flex flex-row justify-between items-center">
          <div className="w-10 h-10 rounded-md bg-surah bg-cover bg-center flex items-center justify-center">
            <p className=" dark:text-white">{number}</p>
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {name}
            </p>
            <span className="text-md text-slate-500">{translation}</span>
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {arabic}
            </p>
            <span className="text-md text-slate-500">{ayat}</span>
          </div>
        </div>
      </div>
      </Link>
    </motion.div>
  );
};

export default AlquranSingle;
