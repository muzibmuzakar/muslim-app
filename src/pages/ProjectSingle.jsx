import { motion } from "framer-motion";

const ProjectSingle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div class="flex-grow">
                  <h2 class="text-gray-900 dark:text-white title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p class="text-gray-500">UI Designer</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div class="flex-grow">
                  <h2 class="text-gray-900 dark:text-white title-font font-medium">
                    Henry Letham
                  </h2>
                  <p class="text-gray-500">CTO</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div class="flex-grow">
                  <h2 class="text-gray-900 dark:text-white title-font font-medium">
                    Oskar Blinde
                  </h2>
                  <p class="text-gray-500">Founder</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div class="flex-grow">
                  <h2 class="text-gray-900 dark:text-white title-font font-medium">John Doe</h2>
                  <p class="text-gray-500">DevOps</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div class="flex-grow">
                  <h2 class="text-gray-900 dark:text-white title-font font-medium">
                    Martin Eden
                  </h2>
                  <p class="text-gray-500">Software Engineer</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div class="flex-grow">
                  <h2 class="text-gray-900 dark:text-white title-font font-medium">
                    Boris Kitua
                  </h2>
                  <p class="text-gray-500">UX Researcher</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div class="flex-grow">
                  <h2 class="text-gray-900 dark:text-white title-font font-medium">
                    Atticus Finch
                  </h2>
                  <p class="text-gray-500">QA Engineer</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div class="flex-grow">
                  <h2 class="text-gray-900 dark:text-white title-font font-medium">
                    Alper Kamu
                  </h2>
                  <p class="text-gray-500">System</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div class="flex-grow">
                  <h2 class="text-gray-900 dark:text-white title-font font-medium">
                    Rodrigo Monchi
                  </h2>
                  <p class="text-gray-500">Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectSingle;
