import { FC, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useColorModeValue } from "@chakra-ui/react";

interface Props {
  children: ReactNode
}

export const ToggleAnimation: FC<Props> = ({ children }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
