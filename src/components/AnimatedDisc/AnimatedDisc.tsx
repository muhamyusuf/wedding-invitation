'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './AnimatedDisc.module.css';

const AnimatedDisc: React.FC = () => {
 const [isAnimationPaused, setAnimationPaused] = useState(false);

 const toggleAnimation = () => {
  setAnimationPaused(!isAnimationPaused);
 };

 return (
  <Image
   id="animatedDisc"
   className={`${styles.discAnimation} ${
    isAnimationPaused ? styles.paused : ''
   } left-10 bottom-10 fixed z-50 cursor-pointer`}
   src="/assets/disc.png"
   alt="disc"
   quality={100}
   width={100}
   height={100}
   onClick={toggleAnimation}
  />
 );
};

export default AnimatedDisc;
