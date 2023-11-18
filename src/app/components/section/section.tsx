import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

interface Props {
  children: ReactNode;
  delay: string,
}

export const Section: FC<Props> = ({ children, delay }) => {
  return <StyledDiv initial={{ x: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={"0.8"} transitionDelay={delay} mb={6}>{children}</StyledDiv>;
};
