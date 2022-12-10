import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScaleOnHoverProps {
  children: ReactNode;
}

export const ScaleOnHover = ({ children }: ScaleOnHoverProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
