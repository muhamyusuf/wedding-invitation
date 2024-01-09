'use client';

import localFont from 'next/font/local';
import MaxWidthWrapper from './MaxWidthWrapper';
import { motion } from 'framer-motion';

const spumoni = localFont({ src: './font/spumoni/spumoni-reguler.ttf' });
const lemonMilkLight = localFont({
 src: './font/lemon-milk/LEMONMILK-Light.otf',
});
const lemonMilkRegular = localFont({
 src: './font/lemon-milk/LEMONMILK-Regular.otf',
});

type params = {
 recepient?: string;
};

export default function HomePage({ recepient }: params) {
 return (
  <main className=" bg-[url('/assets/background.png')] bg-cover bg-no-repeat bg-center">
   <MaxWidthWrapper className="flex relative min-h-screen flex-col items-center justify-around p-2 md:p-5">
    <div className="flex justify-center items-center flex-col">
     <motion.h1
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className={`${spumoni.className} flex flex-col justify-center items-center`}
     >
      <span className="text-2xl md:text-5xl">The Wedding Of</span>
      <span className="text-[56px] md:text-[96px] -mt-8">
       <span className="text-[75px] md:text-[115px]">R</span>IZKY &{' '}
       <span className="text-[75px] md:text-[115px]">D</span>INDA
      </span>
     </motion.h1>

     <motion.p
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
      className={`${lemonMilkLight.className} mt-10`}
     >
      24 FEBRUARI 2024
     </motion.p>
    </div>

    <p className={`${lemonMilkRegular.className} md:text-[24px]`}>
     DEAR/TO {`${recepient ? recepient : 'Guest'}`}
    </p>
   </MaxWidthWrapper>
  </main>
 );
}
