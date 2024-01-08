import Image from 'next/image';
import localFont from 'next/font/local';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

const spumoni = localFont({ src: './font/spumoni/spumoni-reguler.ttf' });
const lemonMilkRegular = localFont({
 src: './font/lemon-milk/LEMONMILK-Regular.otf',
});
const lemonMilkBold = localFont({
 src: './font/lemon-milk/LEMONMILK-Bold.otf',
});

export default function Invitation() {
 return (
  <main className="flex relative min-h-screen p-2 md:p-20 h-full bg-[url('/assets/background-invitation.png')] bg-cover bg-no-repeat bg-center flex-col">
   <div className="flex xl:absolute flex-col justify-center items-center h-[80%] top-50 flex-2">
    <Image
     src="/assets/overlay-invitation.png"
     alt="overlay-invitation"
     width={159}
     height={190}
     quality={100}
    />

    <p className={`${spumoni.className} text-[45px]`}>Wedding event</p>
   </div>

   <div className="flex flex-wrap justify-end items-start gap-2">
    <div className="flex justify-center items-center gap-2 flex-wrap">
     <div className="max-w-[516px]">
      <Image
       src="/assets/invitation-1.png"
       alt="invitation-1"
       width={516}
       height={339}
       quality={100}
      />
     </div>

     <div className="bg-[#109CEB] flex-grow-0 min-h-[339px] flex flex-col items-end justify-around px-5 md:md:px-10 py-5 border-[3px] lg:max-w-[443px] h-fill relative">
      <h2 className={`${lemonMilkBold.className} text-[32px] z-20`}>
       AKAD NIKAH
      </h2>

      <div className="text-end z-20">
       <p className={`${spumoni.className} text-[36px]`}>
        Minggu 18 Febuari 2024
       </p>
       <p className={`${lemonMilkRegular.className} text-[16px]`}>
        11.00 WIB - 14.00 WIB
       </p>
      </div>

      <p className={`${lemonMilkRegular.className} text-[16px] text-end z-20`}>
       Joglo Asri Sari Kuring Indah <br /> Jl. Raya Cilegon, Sukmajaya, Kec
       Jombang, Kota Cilegon, Banten 42416
      </p>

      <div className="absolute left-2 top-4 flex flex-col justify-around z-10 opacity-50 md:opacity-100">
       <Image
        src="/assets/overlay-akadnikah.png"
        alt="overlay-akadnikah"
        width={104}
        height={138}
        quality={100}
       />
      </div>
     </div>
    </div>

    <div className="flex justify-center gap-2 flex-wrap">
     <div className="bg-[#109CEB] min-h-[400px] flex flex-col justify-around px-5 md:md:px-10 py-5 border-[3px] max-w-[680px] h-fill relative">
      <h2 className={`${lemonMilkBold.className} text-[32px] z-20`}>RESEPSI</h2>

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
     </div>

     <Image
      className="flex-grow sm:flex-grow-0 md:w-[279px] md:h-[396px]"
      src="/assets/invitation-4.png"
      alt="invitation-4"
      width={1116}
      height={1579}
      quality={100}
     />
    </div>
   </div>
  </main>
 );
}
