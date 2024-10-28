import React from "react";
import { animate, motion, useCycle } from "framer-motion";

const loaderVariants = {
  animateOne: {
    x: [-20, 0, 20, 0, -20], // X ekseninde animasyon
    transition: {
      x: { repeat: Infinity, duration: 2, ease:"linear" },
    },
  },
  animateTwo: {
    y: [-20, 0, 20, 0, -20], // X ekseninde animasyon
    transition: {
      y: { repeat: Infinity, duration: 2, ease:"linear" },
    },
  },
};

const Loader = () => {

  const [animation, cycleAnimation] = useCycle("animateOne","animateTwo")
  return (
    <>
    <motion.div
      className="loader"
      variants={loaderVariants}
      animate={animation}
    //   style={{
    //     width: "50px",
    //     height: "50px",
    //     backgroundColor: "blue",
    //     borderRadius: "50%",
    //     margin: "50px auto",
    //   }}
    />
    <button onClick={()=>cycleAnimation()}>Chnage Animation</button>
    </>
  );
};

export default Loader;
