import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScaleOnLoadProps {
  children: ReactNode;
}

export const ScaleOnLoad = ({ children }: ScaleOnLoadProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
