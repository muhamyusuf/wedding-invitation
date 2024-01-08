'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styles from './AnimatedDisc.module.css';

const AnimatedDisc: React.FC = () => {
 const [isAnimationPaused, setAnimationPaused] = useState(false);
 const hasSongPlayed = useRef(false); // Menyimpan status apakah lagu sudah pernah dimainkan
 const songRef = useRef<HTMLAudioElement | null>(null);

 useEffect(() => {
  songRef.current = new Audio('/assets/song/Howl-Castle.wav');
  playSong(); // Memainkan lagu saat komponen pertama kali dimuat
  hasSongPlayed.current = true; // Menandai bahwa lagu telah dimainkan
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
 };

 return (
  <Image
   id="animatedDisc"
   className={` ${
    isAnimationPaused ? styles.discAnimation : styles.paused
   } left-2 md:left-10 bottom-2 md:bottom-10 fixed z-50 cursor-pointer`}
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
