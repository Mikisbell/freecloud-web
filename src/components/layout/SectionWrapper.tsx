
"use client";

import { motion } from "framer-motion";

const SectionWrapper = (Component: React.ComponentType<any>, idName: string) =>
  function HOC(props: any) {
    return (
      <motion.section
        id={idName}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0 },
        }}
      >
        <Component {...props} />
      </motion.section>
    );
  };

export default SectionWrapper;
