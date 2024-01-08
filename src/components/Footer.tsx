import Image from 'next/image';
import localFont from 'next/font/local';
import {
 Sheet,
 SheetContent,
 SheetDescription,
 SheetHeader,
 SheetTitle,
 SheetTrigger,
} from '@/components/ui/Sheet';
import { MoveRight } from 'lucide-react';

const spumoni = localFont({ src: './font/spumoni/spumoni-reguler.ttf' });
const kefirRegular = localFont({
 src: './font/kefir/Kefir-Regular.otf',
});
const lemonMilkLight = localFont({
 src: './font/lemon-milk/LEMONMILK-Light.otf',
});
const lemonMilkMedium = localFont({
 src: './font/lemon-milk/LEMONMILK-Medium.otf',
});
const lemonMilkRegular = localFont({
 src: './font/lemon-milk/LEMONMILK-Regular.otf',
});

const Gift = [
 {
  logo: '/assets/gift/bca.png',
  nomor: '7610982047',
  nama: 'MUHAMMAD RIZKY ALGIFARI',
 },
 {
  logo: '/assets/gift/mandiri.png',
  nomor: '1180010141694',
  nama: 'MUHAMMAD RIZKY ALGIFARI',
 },
 {
  logo: '/assets/gift/ovodana.png',
  nomor: '085161601208',
  nama: 'MUHAMMAD RIZKY ALGIFARI',
 },
];

export default function Footer() {
 return (
  <div className="bg-[#1C1C26] flex flex-col px-5 md:px-10 pb-10 items-center relative w-full">
   <div className="bg-[#109CEB] mt-10 flex w-full rounded-sm">
    <div className="pt-10 px-5 lg:pb-20 flex flex-col gap-20 md:flex-row md:gap-10">
     <div className="flex flex-col md:w-[50%]">
      <h3 className={`${lemonMilkMedium.className}`}>Wedding Wish</h3>

      <p className={`mt-2 ${lemonMilkLight.className} text-[12px]`}>
       Kirimkan Doa & Ucapan Kepada kedua Mempelai!
      </p>

      <form
       action="#"
       className={`${lemonMilkRegular.className} relative text-white w-full flex gap-3 flex-col mt-5`}
      >
       <input
        type="text"
        id="name"
        placeholder="Nama"
        className="border bg-transparent px-2 py-1 rounded-sm placeholder:text-white focus:none outline-none"
       />

       <input
        type="text"
        id="keterangan"
        placeholder="Keterangan"
        className="border bg-transparent px-2 py-1 rounded-sm placeholder:text-white focus:none outline-none"
       />

       <textarea
        className="border min-h-[260px] bg-transparent px-2 py-1 rounded-sm placeholder:text-white focus:none outline-none"
        name="pesan"
        id="pesan"
        placeholder="Pesan"
        cols={30}
        rows={10}
       />

       <button
        className={`flex group gap-5 border text-sm absolute right-0 -bottom-14 bg-[#FC571D] py-2 px-5 ${lemonMilkRegular.className}`}
       >
        Submit
        <span className="group-hover:translate-x-2 -mt-[2px] duration-200 ease-in-out">
         <MoveRight />
        </span>
       </button>
      </form>
     </div>

     <div className="flex-grow flex flex-col z-20">
      <h3 className={`${lemonMilkMedium.className}`}>Wedding Gift</h3>

      <p
       className={`mt-2 ${lemonMilkLight.className} text-[12px] md:max-w-[60%]`}
      >
       Tanpa Mengurangi Rasa Hormat, <br />
       Bagi Anda Yang Ingin Memberikan Tanda Kasih Untuk Mempelai, Dapat Melalui{' '}
       <br />
       Virtual Account / E-Wallet
      </p>

      <Sheet>
       <SheetTrigger>
        <button
         className={`flex group gap-5 border text-sm mt-10 bg-[#FC571D] py-2 px-5 ${lemonMilkRegular.className}`}
        >
         Kirim Hadiah
         <span className="group-hover:translate-x-2 -mt-[2px] duration-200 ease-in-out">
          <MoveRight />
         </span>
        </button>
       </SheetTrigger>
       <SheetContent
        className="bg-[#FC571D] py-10 md:py-20 flex md:flex-row flex-col"
        side={'bottom'}
       >
        {Gift.map((item, index) => (
         <div
          className="border border-white/20 shadow-sm rounded-xl px-4 py-6 bg-gradient-to-br flex-grow from-white/30 to-white/10"
          key={index}
         >
          <div className="h-[47px] w-[150px] flex justify-center items-center">
           <Image
            src={item.logo}
            alt="logo"
            width={150}
            height={50}
            quality={100}
           />
          </div>
          <div className={`${lemonMilkLight.className} mt-10 md:mt-20`}>
           <p className="text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-400">
            {item.nomor}
           </p>
           <p className="text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-400">
            {item.nama}
           </p>
          </div>
         </div>
        ))}
       </SheetContent>
      </Sheet>

      <div className="self-end">
       <Image
        className="block lg:hidden"
        src="/assets/footer-overlay.png"
        alt="footer-overlay"
        width={439}
        height={583}
        quality={100}
       />
      </div>
     </div>
    </div>
   </div>

   <div className="absolute z-10 top-0 right-10 hidden lg:block">
    <Image
     src="/assets/footer-overlay.png"
     alt="footer-overlay"
     width={439}
     height={583}
     quality={100}
    />
   </div>

   <div className="flex flex-col w-full items-center mt-5">
    <div
     className={`flex flex-wrap gap-x-10 gap-y-5 mx-auto w-full items-center justify-center ${kefirRegular.className}`}
    >
     <h3>Terimakasih</h3>
     <h3>Thank You</h3>
     <h3 className="leading-4 mt-5 flex flex-col items-center">
      ありがとう <br />
      <span className="text-[8px] text-center">Arigatou Gozaimasu</span>
     </h3>
     <h3 className="leading-4 mt-5 flex flex-col items-center">
      감사 합니다 <br />
      <span className="text-[8px] text-center">Kamsahamnida</span>
     </h3>
     <h3 className="leading-4 mt-5 flex flex-col items-center">
      謝謝 <br />
      <span className="text-[8px] text-center">Xie-xie</span>
     </h3>
    </div>

    <p className="mt-10 text-center max-w-[560px] font-serif text-sm">
     Merupakan suatu kehormatan dan kebahagian bagi kami apabila
     Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do&apos;a restu kepada
     kami yang berbahagia
    </p>
   </div>

   <div className="mt-10">
    <h1
     className={`${spumoni.className} flex leading-4 flex-col justify-center items-center`}
    >
     <span className="text-[12px]">The Wedding Of</span>
     <span className="text-[16px]">
      <span className="text-[20px]">R</span>IZKY &{' '}
      <span className="text-[20px]">D</span>INDA
     </span>
    </h1>
   </div>
  </div>
 );
}
