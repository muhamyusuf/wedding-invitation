import Image from 'next/image';
import localFont from 'next/font/local';
import { Instagram, MoveRight } from 'lucide-react';
import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';

const kefirRegular = localFont({
 src: './font/kefir/Kefir-Regular.otf',
});
const lemonMilkLight = localFont({
 src: './font/lemon-milk/LEMONMILK-Light.otf',
});

export default function ProfilWoman() {
 return (
  <main className="bg-[url('/assets/background-profilWoman.png')] bg-cover bg-no-repeat bg-center">
   <MaxWidthWrapper className="flex flex-wrap relative min-h-screen items-center justify-around px-2 md:px-0 py-20 md:p-5">
    <div className="md:max-w-[50%] w-full [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] flex flex-col items-center justify-center md:items-end gap-10 text-center z-20 md:text-start">
     <p
      className={`flex flex-col text-xl text-center md:text-end items-center md:items-end justify-center md:justify-end leading-7 ${lemonMilkLight.className}`}
     >
      <span className="font-bold">Dinda Sakdiah Febriani, S.KM</span>
      <span className="italic">Putri pertama DARI</span>
      Bapak Sodikin & Ibu Ida Rosidah
     </p>

     <div className="flex justify-end mt-5 flex-col gap-5 relative">
      <p
       className={`md:max-w-[80%] md:self-end lg:text-lg md:text-[16px] text-sm text-center md:text-end ${kefirRegular.className}`}
      >
       DINDA SAKDIAH FEBRIANI, perempuan cantik, manis, imut, lucu, penyabar,
       pengertian, baik hati, dan lemah lembut. Perempuan yang tidak pernah
       lelah menghadapi pribadiku, perempuan yang selalu sabar saat diriku marah
       besar, dan perempuan yang tidak pernah menyerah belajar segalanya tentang
       ku. itulah dia calon istri ku, perempuan terbaik dan terhebat yang
       dikirimkan Allah pada ku setelah ibuku.
       <br /> <br />I love you a lot and it &#x2019; s always been you
      </p>

      <Link
       className="md:self-end self-center"
       href="https://www.instagram.com/dindasdf_/"
      >
       <button
        className={`flex group gap-5 border-2 items-center mt-10 bg-transoarent py-2 px-5 font-serif text-[16px]`}
       >
        <Instagram className="text-white" />
        @dindasdf_
        <span className="group-hover:translate-x-2 -mt-[2px] duration-200 ease-in-out text-[#FC571D]">
         <MoveRight />
        </span>
       </button>
      </Link>
     </div>
    </div>

    <div className="mt-10 md:mt-0">
     <Image
      src="/assets/profile-woman.png"
      alt="profil-woman"
      width={340}
      height={479}
      quality={100}
     />
    </div>

    <Image
     className="absolute opacity-50 md:opacity-100 z-10 top-0 left-10"
     src="/assets/overlay-woman.png"
     alt="overlay-woman"
     width={250}
     height={341}
     quality={100}
    />
   </MaxWidthWrapper>
  </main>
 );
}
