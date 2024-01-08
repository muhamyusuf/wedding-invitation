import Image from 'next/image';
import localFont from 'next/font/local';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

const lemonMilkRegular = localFont({
 src: './font/lemon-milk/LEMONMILK-Regular.otf',
});

export default function Gallery() {
 return (
  <main className="flex relative min-h-screen items-center justify-around p-2 md:p-5 bg-[url('/assets/background-gallery.png')] bg-cover bg-no-repeat bg-center border-y-2">
   <div className="flex flex-col">
    <h2 className={`${lemonMilkRegular.className} text-[36px]`}>OUR GALLERY</h2>

    <div className="flex flex-col md:flex-row border-2 mt-2">
     <div className="px-2 py-10 md:px-6 md:py-14 lg:py-20 bg-[#109CEB] flex justify-center items-center">
      <Image
       src="/assets/gallery-overlay.png"
       alt="gallery-overlay"
       width={305}
       height={268}
       quality={100}
      />
     </div>

     <div className="max-w-[467px] flex flex-wrap">
      <div className="flex max-w-[467px]">
       <div className="w-1/2 border">
        <Image
         src={`/assets/gallery/gallery-item-1.png`}
         alt={'gallery-item-1'}
         width={924}
         height={960}
         quality={100}
        />
       </div>
       <div className="w-1/2 border">
        <Image
         src={`/assets/gallery/gallery-item-2.png`}
         alt={'gallery-item-2'}
         width={928}
         height={960}
         quality={100}
        />
       </div>
      </div>

      <div className="max-w-[467px] border">
       <Image
        src={`/assets/gallery/gallery-item-3.png`}
        alt={'gallery-item-3'}
        width={1860}
        height={960}
        quality={100}
       />
      </div>
     </div>

     <div className="max-w-[467px] flex flex-wrap">
      <div className="max-w-[467px] border">
       <Image
        src={`/assets/gallery/gallery-item-4.png`}
        alt={'gallery-item-4'}
        width={1860}
        height={960}
        quality={100}
       />
      </div>

      <div className="flex max-w-[467px]">
       <div className="w-1/2 border">
        <Image
         src={`/assets/gallery/gallery-item-5.png`}
         alt={'gallery-item-5'}
         width={928}
         height={960}
         quality={100}
        />
       </div>
       <div className="w-1/2 border">
        <Image
         src={`/assets/gallery/gallery-item-6.png`}
         alt={'gallery-item-6'}
         width={924}
         height={960}
         quality={100}
        />
       </div>
      </div>
     </div>
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
  </main>
 );
}
