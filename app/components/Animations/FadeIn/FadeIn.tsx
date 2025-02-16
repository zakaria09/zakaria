import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {InView} from 'react-intersection-observer';

const itemVariants = {
  hidden: {opacity: 0, y: 20},
  show: {opacity: 1, y: 0},
};

export default function FadeIn({children}: {children: React.ReactNode}) {
  const [animate, setAnimate] = useState(false);
  return (
    <InView
      as='div'
      threshold={0.8}
      delay={100}
      triggerOnce={true}
      onChange={(inView, entry) => {
        if (inView) setAnimate(inView);
      }}
    >
      <motion.div
        initial={{opacity: 0}}
        variants={itemVariants}
        transition={{duration: 0.5, ease: 'easeOut'}}
        animate={animate ? 'show' : 'hidden'}
        className='relative '
      >
        {children}
      </motion.div>
    </InView>
  );
}
