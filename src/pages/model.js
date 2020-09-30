import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from "react";
//Components
import ScrollForMore from "../components/scrollForMore";
//Ease

const transition = {
  duration: 1.4,
  ease: [0.6, .01, -.05, .9]
}

const firstNameVariants = {
  animate: {
    y: 0,
    transition: {
      delayChildren: .6,
      staggerChildren: .05,
      staggerDirection: -1
    }
  }
}

const lastNameVariants = {
  animate: {
    y: 0,
    transition: {
      delayChildren: .6,
      staggerChildren: .05,
      staggerDirection: 1
    }
  }
}

const letterVariants = {
  intial: {
    y: 400
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition }
  }
}

const Model = ({ imageDetails: { width, height } }) => {
  const { scrollYProgress } = useViewportScroll();
  console.log(scrollYProgress);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  console.log(scale)
  return (
    <motion.div
      className='single'
      initial="intial"
      animate="animate"
      exit="exit"
    >
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition }
              }}
              className='details'
            >
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
              <div className='mua'>MUA: @mylifeascrystall</div>
            </motion.div>
            <div className='model'>
              <motion.span variants={firstNameVariants} className='first'>
                <motion.span variants={letterVariants}>Y</motion.span>
                <motion.span variants={letterVariants}>a</motion.span>
                <motion.span variants={letterVariants}>s</motion.span>
                <motion.span variants={letterVariants}>m</motion.span>
                <motion.span variants={letterVariants}>e</motion.span>
                <motion.span variants={letterVariants}>e</motion.span>
                <motion.span variants={letterVariants}>n</motion.span>
              </motion.span>
              <motion.span variants={lastNameVariants} className='last'>
                <motion.span variants={letterVariants}>T</motion.span>
                <motion.span variants={letterVariants}>a</motion.span>
                <motion.span variants={letterVariants}>r</motion.span>
                <motion.span variants={letterVariants}>i</motion.span>
                <motion.span variants={letterVariants}>q</motion.span>
              </motion.span>
            </div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <div className='image-container-single'>
              <motion.div className='thumbnail-single'
                initial={{ width, height, y: '-50%' }}
                animate={{
                  y: 0,
                  width: '100%',
                  height: window.innerWidth > 1500 ? 800 : 400,
                  transition: { delay: 0.2, ...transition }
                }}
              >
                <div className='frame-single'>
                  <motion.img
                    style={{ 'scale': scale }}
                    initial={{ scale: 1.1 }}
                    animate={{
                      y: window.innerWidth > 1500 ? -400 : -100,
                      transition: { delay: 0.2, ...transition }
                    }}
                    src={require("../images/model.jpg")}
                    alt="model image" />
                </div>
              </motion.div>
            </div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
              The insiration behind the artwork & <br /> what it means.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;
