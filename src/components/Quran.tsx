import Image from 'next/image';
import localFont from 'next/font/local';

const kefirRegular = localFont({
 src: './font/kefir/Kefir-Regular.otf',
});

const lemonMilkMedium = localFont({
 src: './font/lemon-milk/LEMONMILK-Medium.otf',
});

export default function Quran() {
 return (
  <main className="relative">
   <Image
    className="w-full h-full object-cover object-center"
    src="/assets/gallery-quran.png"
    alt="gallery-quran"
    width={1440}
    height={545}
    quality={100}
   />

   <div className="flex flex-col">
    <div className="bg-[#1C1C26] w-full h-full flex justify-center items-center flex-col lg:px-56 px-2 py-16 text-center">
     <p className={`${kefirRegular.className}`}>
      &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
      pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
      merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
      sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
      (kebesaran Allah) bagi kaum yang berpikir.&quot;
     </p>

     <p className={`mt-10 ${lemonMilkMedium.className} text-[#3ab3f6]`}>
      QS. Ar-Rum: 21
     </p>
    </div>

    <div className="bg-[#1C1C26] w-full h-full flex justify-center items-center flex-col lg:px-56 px-2 py-16 text-center">
     <p className={`${kefirRegular.className}`}>
      &quot;Siapa yang menikah maka sungguh ia telah diberi setengahnya
      ibadah.&quot;
     </p>

     <p className={`mt-10 ${lemonMilkMedium.className} text-[#3ab3f6]`}>
      HR. Abu Ya &apos;la
     </p>
    </div>
   </div>
  </main>
 );
}
