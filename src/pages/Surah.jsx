import { motion } from "framer-motion";

const Surah = () => {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.7,
          delay: 0.15,
        }}
      >
        <div className="rounded-md border border-slate-700 dark:wwhite px-4 mb-10 sm:mb-0">
          <div className="flex flex-row justify-between items-center">
            <div className="w-10 h-10 rounded-md bg-surah bg-cover bg-center flex items-center justify-center">
              <p className=" dark:text-white">1</p>
            </div>
            <div className="text-center px-4 py-6">
              <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              Al-Fātiḥah
              </p>
              <span className="text-md text-slate-500">Pembuka</span>
            </div>
            <div className="text-center px-4 py-6">
              <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              الفاتحة
              </p>
              <span className="text-md text-slate-500">7 ayat</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Surah;
