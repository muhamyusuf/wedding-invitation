import Image from 'next/image';
import localFont from 'next/font/local';
import { MoveRight } from 'lucide-react';

const lemonMilkRegular = localFont({
 src: './font/lemon-milk/LEMONMILK-Regular.otf',
});

export default function Gallery() {
 return (
  <main className="flex relative min-h-screen items-center justify-around p-2 md:p-5 bg-[url('/assets/background-gallery.png')] bg-cover bg-no-repeat bg-center">
   <div className="flex flex-col">
    <h2 className={`${lemonMilkRegular.className} text-[36px]`}>OUR GALLERY</h2>

    <div className="flex border mt-2">
     <div className="w-[371px] px-2 py-40 bg-[#3ab3f6] flex justify-center items-center">
      <Image
       src="/assets/gallery-overlay.png"
       alt="gallery-overlay"
       width={305}
       height={268}
       quality={100}
      />
     </div>

     <div className="w-[467px] flex flex-wrap">
      <div className="flex border w-[467px]">
       <div className="w-1/2 border">grid 1 items 1</div>
       <div className="w-1/2 border">grid 1 items 2</div>
      </div>

      <div className="w-[467px] border">grid 1 items 3</div>
     </div>

     <div className="w-[467px] flex flex-wrap">
      <div className="w-[467px] border">grid 2 items 1</div>

      <div className="flex border w-[467px]">
       <div className="w-1/2 border">grid 1 items 2</div>
       <div className="w-1/2 border">grid 1 items 3</div>
      </div>
     </div>
    </div>

    <div className="self-end">
     <button
      className={`flex group gap-5 border text-sm mt-10 bg-transoarent py-2 px-5 ${lemonMilkRegular.className}`}
     >
      See More
      <span className="group-hover:translate-x-2 -mt-[2px] duration-200 ease-in-out text-[#FC571D]">
       <MoveRight />
      </span>
     </button>
    </div>
   </div>
  </main>
 );
}
