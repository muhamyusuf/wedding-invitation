import localFont from 'next/font/local';

const spumoni = localFont({ src: './font/spumoni/spumoni-reguler.ttf' });
const kefirRegular = localFont({
 src: './font/kefir/Kefir-Regular.otf',
});

export default function Footer() {
 return (
  <div className="bg-[#1C1C26] p-10 flex flex-col items-center">
   <div>CARD</div>

   <div className="flex flex-col w-full items-center">
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
