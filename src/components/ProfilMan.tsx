import Image from 'next/image';
import localFont from 'next/font/local';
import { Instagram, MoveRight } from 'lucide-react';
import Link from 'next/link';

const kefirRegular = localFont({
 src: './font/kefir/Kefir-Regular.otf',
});
const lemonMilkLight = localFont({
 src: './font/lemon-milk/LEMONMILK-Light.otf',
});
const lemonMilkRegular = localFont({
 src: './font/lemon-milk/LEMONMILK-Regular.otf',
});

export default function ProfilMan() {
 return (
  <main className="flex flex-wrap relative min-h-screen items-center justify-around px-2 md:px-0 py-20 md:p-5 bg-[url('/assets/background-profilMan.png')] bg-cover bg-no-repeat bg-center border-y-2">
   <div>
    <Image
     className="w-[300px] h-full md:w-[340px]"
     src="/assets/profile-man.png"
     alt="profil-man"
     width={340}
     height={479}
     quality={100}
    />
   </div>

   <div className="md:max-w-[50%] w-full [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] flex flex-col items-center justify-center gap-10 text-center md:text-start z-20">
    <p
     className={`flex flex-col text-xl items-center justify-center md:justify-start md:items-start leading-7 ${lemonMilkLight.className} w-full mt-10 md:mt-0`}
    >
     <span className="font-bold">Muhammad Rizky Algifari, S.KM</span>
     <span className="italic">Putra pertama DARI</span>
     Bapak Riyanto, SH & Ibu Linda Yasmita
    </p>

    <div className="flex mt-2 md:mt-10 gap-5 relative flex-col">
     <p
      className={`md:max-w-[80%] text-sm md:text-[16px] lg:text-lg ${kefirRegular.className}`}
     >
      Algifari, manusia paling cuek dan tidak bisa mengekspresikan perasaannya,
      Mungkin banyak orang melihat dia seperti anak kecil, tapi dia dewasa dalam
      berpikir dan sangat menghargai aku dan kedua orangtuaku. Cara bicara dia
      tidak pernah tinggi sekalipun dia marah (karena diem marahnya). Selalu
      mengingatkan aku dengan baik, aku sangat bersyukur bisa bertemu dengan
      algifari. Sudah dipertemukan dalam takdir Allah. Terimakasih sudah peduli
      dengan aku dan keluargaku. Aku Aku sangat menghargai kamu. <br /> <br />I
      love you a lot and it &#x2019; s always been you
     </p>

     <Link
      className="md:self-start"
      href="https://www.instagram.com/rizkygifarii/"
     >
      <button
       className={`flex font-serif items-center group gap-5 border-2 text-[16px] mt-10 bg-transoarent py-2 px-5`}
      >
       <Instagram className="text-white" />
       @rizkygifarii
       <span className="group-hover:translate-x-2 duration-200 ease-in-out text-[#FC571D]">
        <MoveRight />
       </span>
      </button>
     </Link>
    </div>
   </div>

   <Image
    className="absolute opacity-50 md:opacity-100 z-10 bottom-0 right-10"
    src="/assets/overlay-man.png"
    alt="overlay-man"
    width={314}
    height={314}
    quality={100}
   />
  </main>
 );
}
