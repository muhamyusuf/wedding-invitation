'use client';

import Image from 'next/image';
import localFont from 'next/font/local';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const lemonMilkRegular = localFont({
 src: './font/lemon-milk/LEMONMILK-Regular.otf',
});

export default function Gallery() {
 const viewRef = useRef(null);
 const isInView = useInView(viewRef, { once: true });

 return (
  <main className="bg-[url('/assets/background-gallery.png')] bg-cover bg-no-repeat bg-center border-y-2">
   <MaxWidthWrapper className="flex relative min-h-screen items-center justify-around p-2 md:p-5">
    <div className="flex flex-col">
     <h2 className={`${lemonMilkRegular.className} text-[36px]`}>
      OUR GALLERY
     </h2>

     <div className="flex flex-col md:flex-row border-2 mt-2">
      <div className="px-2 py-10 md:px-6 md:py-14 lg:py-20 bg-[#109CEB] flex justify-center items-center">
       <motion.div
        ref={viewRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
         isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
        }
        transition={{ duration: 1.5, ease: 'easeInOut' }}
       >
        <Image
         src="/assets/gallery-overlay.png"
         alt="gallery-overlay"
         width={305}
         height={268}
         quality={100}
        />
       </motion.div>
      </div>

      <motion.div
       ref={viewRef}
       initial={{ opacity: 0, x: -100 }}
       animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
       transition={{ duration: 1, ease: 'easeInOut' }}
       className="max-w-[467px] flex flex-wrap"
      >
       <div className="flex max-w-[467px]">
        <div className="w-1/2 border group overflow-hidden">
         <Image
          src={`/assets/gallery/gallery-item-1.png`}
          alt={'gallery-item-1'}
          width={924}
          height={960}
          quality={100}
          className="group-hover:scale-110 transition duration-500 ease-in-out"
         />
        </div>

        <div className="w-1/2 border group overflow-hidden">
         <Image
          src={`/assets/gallery/gallery-item-2.png`}
          alt={'gallery-item-2'}
          width={928}
          height={960}
          quality={100}
          className="group-hover:scale-110 transition duration-500 ease-in-out"
         />
        </div>
       </div>

       <div className="max-w-[467px] border group overflow-hidden">
        <Image
         src={`/assets/gallery/gallery-item-3.png`}
         alt={'gallery-item-3'}
         width={1860}
         height={960}
         quality={100}
         className="group-hover:scale-110 transition duration-500 ease-in-out"
        />
       </div>
      </motion.div>

      <motion.div
       ref={viewRef}
       initial={{ opacity: 0, x: -100 }}
       animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
       transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
       className="max-w-[467px] flex flex-wrap"
      >
       <div className="max-w-[467px] border group overflow-hidden">
        <Image
         src={`/assets/gallery/gallery-item-4.png`}
         alt={'gallery-item-4'}
         width={1860}
         height={960}
         quality={100}
         className="group-hover:scale-110 transition duration-500 ease-in-out"
        />
       </div>

       <div className="flex max-w-[467px]">
        <div className="w-1/2 border group overflow-hidden">
         <Image
          src={`/assets/gallery/gallery-item-5.png`}
          alt={'gallery-item-5'}
          width={928}
          height={960}
          quality={100}
          className="group-hover:scale-110 transition duration-500 ease-in-out"
         />
        </div>
        <div className="w-1/2 border group overflow-hidden">
         <Image
          src={`/assets/gallery/gallery-item-6.png`}
          alt={'gallery-item-6'}
          width={924}
          height={960}
          quality={100}
          className="group-hover:scale-110 transition duration-500 ease-in-out"
         />
        </div>
       </div>
      </motion.div>
     </div>

     <Link
      className="self-end"
      href="https://drive.google.com/drive/folders/1pSHGiga2jtbbSDDtF5kAbbeLdUxHaH_N"
     >
      <button
       className={`flex group gap-5 border text-sm mt-10 bg-transoarent py-2 px-5 ${lemonMilkRegular.className}`}
      >
       See More
       <span className="group-hover:translate-x-2 -mt-[2px] duration-200 ease-in-out text-[#FC571D]">
        <MoveRight />
       </span>
      </button>
     </Link>
    </div>
   </MaxWidthWrapper>
  </main>
 );
}
