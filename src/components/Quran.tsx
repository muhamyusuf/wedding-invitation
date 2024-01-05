'use client';

import Image from 'next/image';
import localFont from 'next/font/local';
import Autoplay from 'embla-carousel-autoplay';

import * as React from 'react';

import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from '@/components/ui/Carousel';

const kefirRegular = localFont({
 src: './font/kefir/Kefir-Regular.otf',
});

const lemonMilkMedium = localFont({
 src: './font/lemon-milk/LEMONMILK-Medium.otf',
});

const QuranData = [
 {
  script:
   'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.',
  location: 'QS. Ar-Rum: 21',
 },
 {
  script: 'Siapa yang menikah maka sungguh ia telah diberi setengahnya ibadah.',
  location: 'HR. Abu Ya la',
 },
];

export default function Quran() {
 return (
  <main className="relative">
   <Image
    className="w-full h-full object-cover object-center"
    src="/assets/gallery-quran.png"
    alt="gallery-quran"
    width={1440}
    height={545}
    quality={100}
   />

   <Carousel
    plugins={[
     Autoplay({
      delay: 5000,
     }),
    ]}
    className="relative"
   >
    <CarouselContent>
     {QuranData.map((item, index) => (
      <CarouselItem key={index}>
       <div className="bg-[#1C1C26] w-full h-full flex justify-center items-center flex-col lg:px-56 px-2 py-16 text-center rounded-sm">
        <p className={`${kefirRegular.className}`}>&quot;{item.script}&quot;</p>

        <p className={`mt-10 ${lemonMilkMedium.className} text-[#3ab3f6]`}>
         {item.location}
        </p>
       </div>
      </CarouselItem>
     ))}
    </CarouselContent>

    <CarouselPrevious className="absolute right-1 md:left-5" />
    <CarouselNext className="absolute right-1 md:right-5" />
   </Carousel>
  </main>
 );
}
