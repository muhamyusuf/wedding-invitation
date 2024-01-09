'use client';

import Image from 'next/image';
import localFont from 'next/font/local';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const spumoni = localFont({ src: './font/spumoni/spumoni-reguler.ttf' });
const lemonMilkRegular = localFont({
 src: './font/lemon-milk/LEMONMILK-Regular.otf',
});
const lemonMilkBold = localFont({
 src: './font/lemon-milk/LEMONMILK-Bold.otf',
});

export default function Invitation() {
 const viewRef = useRef(null);
 const isInView = useInView(viewRef, { once: true });

 return (
  <main className="bg-[url('/assets/background-invitation.png')] bg-cover bg-no-repeat bg-center">
   <MaxWidthWrapper className="flex relative min-h-screen p-2 md:p-20 h-full flex-col">
    <motion.div
     transition={{ duration: 0.7, ease: 'easeInOut' }}
     ref={viewRef}
     initial={{ opacity: 0, y: 100, scale: 0.5 }}
     animate={
      isInView
       ? { opacity: 1, y: 0, scale: 1 }
       : { opacity: 0, y: 100, scale: 0.5 }
     }
     className="flex xl:absolute flex-col justify-center items-center h-[80%] top-50 flex-2"
    >
     <Image
      src="/assets/overlay-invitation.png"
      alt="overlay-invitation"
      width={159}
      height={190}
      quality={100}
     />

     <p className={`${spumoni.className} text-[45px]`}>Wedding event</p>
    </motion.div>

    <div className="flex flex-wrap justify-end items-start gap-2">
     <div className="flex justify-center items-center gap-2 flex-wrap relative w-full lg:w-fit">
      <motion.div
       ref={viewRef}
       initial={{ opacity: 0, y: 100 }}
       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
       transition={{ duration: 1, ease: 'easeInOut' }}
       className="overflow-hidden"
      >
       <Image
        src="/assets/invitation-1.png"
        alt="invitation-1"
        width={516}
        height={339}
        quality={100}
        className="w-full lg:max-w-[516px] bg-cover h-[339px] lg:h-[360px] border"
       />
      </motion.div>

      <motion.div
       ref={viewRef}
       initial={{ opacity: 0, y: 100 }}
       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
       transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
       className="bg-[#109CEB] lg:max-w-[443px] max-w-[516px] flex-grow-0 min-h-[339px] flex flex-col overflow-hidden border-[3px] h-fill relative"
      >
       <iframe
        width="fill"
        height="248"
        src="https://www.youtube.com/embed/hAoAVa0QLqc?si=72xewuG0iIpQa9Kt&autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       />

       <div className="px-2 mt-1">
        <h2 className="font-semibold font-sans">PREWEDD VIDEO DINDA & RIZKY</h2>
        <p className="text-[10px]">156,987 views . Jan 1, 2024</p>
       </div>

       <div className="pl-5">
        <Image
         src="/assets/overlay-video-inv.png"
         alt="overlay-video"
         width={1256}
         height={192}
         quality={100}
        />
       </div>
      </motion.div>
     </div>

     <div className="flex justify-center gap-2 flex-wrap lg:max-w-[967px]">
      <motion.div
       ref={viewRef}
       initial={{ opacity: 0, y: 100 }}
       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
       transition={{ duration: 1, ease: 'easeInOut', delay: 0.8 }}
       className="bg-[#109CEB] max-w-[516px] min-h-[400px] flex flex-col justify-around px-5 md:md:px-10 py-5 border-[3px] md:max-w-[680px] h-fill relative"
      >
       <h2 className={`${lemonMilkBold.className} text-[32px] z-20`}>
        RESEPSI
       </h2>

       <div className="z-20">
        <p className={`${spumoni.className} text-[36px]`}>
         Minggu 24 Febuari 2024
        </p>
        <p className={`${lemonMilkRegular.className} text-[16px]`}>
         11.00 WIB - 14.00 WIB
        </p>
       </div>

       <p
        className={`${lemonMilkRegular.className} text-[16px] md:max-w-[60%] z-20`}
       >
        Jl. Komp. Interkota Indah Blok C3 No.1-2, RT.12/RW.7, Duri Kosambi,
        Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta
        11750
       </p>

       <Link href="https://goo.gl/maps/Bp2bdATvDRiUk5UF6" className="z-20">
        <button
         className={`flex group gap-10 border text-sm bg-[#FC571D] py-2 px-5 ${lemonMilkRegular.className}`}
        >
         Google Maps
         <span className="group-hover:translate-x-2 -mt-[2px] duration-200 ease-in-out">
          <MoveRight />
         </span>
        </button>
       </Link>

       <div className="absolute right-5 flex flex-col justify-around z-10 opacity-50 md:opacity-100">
        <Image
         src="/assets/overlay-resepsi.png"
         alt="overlay-resepsi"
         width={203}
         height={296}
         quality={100}
        />
       </div>
      </motion.div>

      <motion.div
       ref={viewRef}
       initial={{ opacity: 0, y: 100 }}
       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
       transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
       className="max-w-[516px]"
      >
       <Image
        className="flex-grow sm:flex-grow-0 md:w-[279px] md:h-[396px]"
        src="/assets/invitation-4.png"
        alt="invitation-4"
        width={1116}
        height={1579}
        quality={100}
       />
      </motion.div>
     </div>
    </div>
   </MaxWidthWrapper>
  </main>
 );
}
