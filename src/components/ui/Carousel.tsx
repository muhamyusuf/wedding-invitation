'use client';

import { useState, useRef, MouseEvent } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';

const kefirRegular = localFont({
 src: '../font/kefir/Kefir-Regular.otf',
});

const lemonMilkMedium = localFont({
 src: '../font/lemon-milk/LEMONMILK-Medium.otf',
});

const QuranData = [
 {
  script:
   'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.',
  location: 'QS. Ar-Rum: 21',
  overlay: '/assets/overlay-ayat-1.png',
  overlayWidth: 82,
  overlayHeight: 200,
 },
 {
  script: 'Siapa yang menikah maka sungguh ia telah diberi setengahnya ibadah.',
  location: 'HR. Abu Ya la',
  overlay: '/assets/overlay-ayat-2.png',
  overlayWidth: 399,
  overlayHeight: 286,
 },
];

type QuranItem = {
 script: string;
 location: string;
 overlay: string;
 overlayWidth: number;
 overlayHeight: number;
};

export default function Carousel() {
 const carouselRef = useRef<HTMLDivElement | null>(null);
 const carouselItemRef = useRef<HTMLDivElement | null>(null);

 const [currentIndex, setCurrentIndex] = useState<number>(0);

 const scrollToRight = (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  if (carouselRef.current) {
   carouselRef.current.scrollBy({
    left: carouselItemRef.current?.clientWidth || 0,
    top: 0,
    behavior: 'smooth',
   });
  }
  setCurrentIndex((prevState) => prevState + 1);
 };

 const scrollToLeft = (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  if (carouselRef.current) {
   carouselRef.current.scrollBy({
    left: -(carouselItemRef.current?.clientWidth || 0),
    top: 0,
    behavior: 'smooth',
   });
  }
  setCurrentIndex((prevState) => prevState - 1);
 };

 const goToSlide = (index: number) => {
  if (carouselRef.current) {
   const itemWidth = carouselItemRef.current?.clientWidth || 0;
   carouselRef.current.scrollTo({
    left: itemWidth * index,
    top: 0,
    behavior: 'smooth',
   });
  }
  setCurrentIndex(index);
 };

 return (
  <div className="relative">
   <div
    ref={carouselRef}
    className="flex items-center justify-start w-full overflow-hidden relative"
   >
    {QuranData.map((item: QuranItem, index) => (
     <div
      key={index}
      ref={carouselItemRef}
      className="flex-shrink-0 overflow-hidden bg-[#1C1C26] w-full h-[250px] flex flex-col items-center text-white lg:px-56 px-2 py-16 relative"
      data-index={`data-${index}`}
     >
      <p
       className={`"px-2 md:mt-2 font-medium text-[10px] md:text-[14px] text-white rounded-lg text-center w-fit ${kefirRegular.className}`}
      >
       &quot;{item.script}&quot;
      </p>

      <p
       className={`mt-5 md:mt-10 text-lg text-[#109CEB] ${lemonMilkMedium.className}`}
      >
       {item.location}
      </p>

      <Image
       src={item.overlay}
       alt={item.location}
       width={item.overlayWidth}
       height={item.overlayHeight}
       quality={100}
       className={`absolute bottom-0 right-0 brightness-50 ${
        item.overlay === '/assets/overlay-ayat-1.png'
         ? 'right-[100px]'
         : 'right-0'
       }`}
      />
     </div>
    ))}
   </div>

   <div className="w-full h-full inset-0 absolute">
    <div className="flex items-center h-full w-full justify-between">
     <button
      type="button"
      aria-label="scroll to left"
      onClick={scrollToLeft}
      className={`h-full p-2 ${
       currentIndex > 0 ? 'bg-[#109CEB]' : 'bg-gray-500 cursor-not-allowed'
      }`}
      disabled={currentIndex === 0}
     >
      <ArrowLeft className="text-lg text-blue" />
     </button>

     <button
      type="button"
      aria-label="scroll to right"
      onClick={scrollToRight}
      className={`h-full p-2 ${
       currentIndex < QuranData.length - 1
        ? 'bg-[#109CEB]'
        : 'bg-gray-500 cursor-not-allowed'
      }`}
      disabled={currentIndex === QuranData.length - 1}
     >
      <ArrowRight className="text-lg text-blue" />
     </button>
    </div>
   </div>

   <div className="flex items-center justify-center w-full mt-3 absolute bottom-0 mx-auto py-5">
    {QuranData.map((_, index) => (
     <button
      key={index}
      type="button"
      aria-label="go to slide index"
      className={`w-2 h-2 mx-1 rounded-full focus:outline-none ${
       index === currentIndex ? 'bg-[#109CEB]' : 'bg-gray-700'
      }`}
      onClick={() => goToSlide(index)}
     ></button>
    ))}
   </div>
  </div>
 );
}
