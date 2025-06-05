import { motion as Motion } from "framer-motion";

const AnimationWrapper = ({ children, duration = 1, delay = 0, ...rest }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      {...rest}
    >
      {children}
    </Motion.div>
  );
};

export default AnimationWrapper;