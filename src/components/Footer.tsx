import Image from 'next/image';
import localFont from 'next/font/local';

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

export default function Footer() {
 return (
  <div className="bg-[#1C1C26] flex flex-col px-10 pb-10 items-center relative w-full">
   <div className="bg-[#3ab3f6] mt-10 flex w-full rounded-sm">
    <div className="pt-10 px-10 pb-20 flex gap-10">
     <div className="flex flex-col w-[50%]">
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
        <span className="group-hover:translate-x-2 duration-200 ease-in-out">
         &rarr;
        </span>
       </button>
      </form>
     </div>

     <div className="flex-grow">
      <h3 className={`${lemonMilkMedium.className}`}>Wedding Gift</h3>

      <p className={`mt-2 ${lemonMilkLight.className} text-[12px] max-w-[60%]`}>
       Tanpa Mengurangi Rasa Hormat, <br />
       Bagi Anda Yang Ingin Memberikan Tanda Kasih Untuk Mempelai, Dapat Melalui{' '}
       <br />
       Virtual Account / E-Wallet
      </p>

      <button
       className={`flex group gap-5 border text-sm mt-10 bg-[#FC571D] py-2 px-5 ${lemonMilkRegular.className}`}
      >
       Kirim Hadiah
       <span className="group-hover:translate-x-2 duration-200 ease-in-out">
        &rarr;
       </span>
      </button>
     </div>
    </div>
   </div>

   <div className="absolute right-10">
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
