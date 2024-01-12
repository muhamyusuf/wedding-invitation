'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styles from './AnimatedDisc.module.css';

const AnimatedDisc: React.FC = () => {
 const [isAnimationPaused, setAnimationPaused] = useState(false);
 const [isInstructionVisible, setInstructionVisible] = useState(true);
 const hasSongPlayed = useRef(false); // Menyimpan status apakah lagu sudah pernah dimainkan
 const songRef = useRef<HTMLAudioElement | null>(null);

 useEffect(() => {
  songRef.current = new Audio('/assets/song/Howl-Castle.wav');
  playSong(); // Memainkan lagu saat komponen pertama kali dimuat
  hasSongPlayed.current = true; // Menandai bahwa lagu telah dimainkan

  return () => {
   if (songRef.current) {
    songRef.current.pause();
   }
  };
 }, []);

 const playSong = () => {
  if (songRef.current) {
   songRef.current.play();
   hasSongPlayed.current = true; // Menandai bahwa lagu telah dimainkan
  }
 };

 const pauseSong = () => {
  if (songRef.current) {
   songRef.current.pause();
  }
 };

 const toggleAnimation = () => {
  setAnimationPaused(!isAnimationPaused);

  if (isAnimationPaused) {
   // Jika lagu sudah pernah dimainkan, gunakan pauseSong
   if (hasSongPlayed.current) {
    pauseSong();
   } else {
    playSong();
   }
  } else {
   playSong();
  }

  if (isInstructionVisible) {
   setInstructionVisible(false);
  }
 };

 return (
  <div className="left-2 md:left-10 bottom-2 md:bottom-10 fixed z-40 cursor-pointer">
   {isInstructionVisible && (
    <p
     className={`text-[10px] text-center bg-white text-black rounded-md mb-2`}
    >
     Click to play song!!
    </p>
   )}
   <Image
    id="animatedDisc"
    className={`${isAnimationPaused ? styles.discAnimation : styles.paused}`}
    src="/assets/disc.png"
    alt="disc"
    quality={100}
    width={100}
    height={100}
    onClick={toggleAnimation}
   />
  </div>
 );
};

export default AnimatedDisc;
