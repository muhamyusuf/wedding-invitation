import Image from 'next/image';
import localFont from 'next/font/local';
import Carousel from './ui/Carousel';

const kefirRegular = localFont({
 src: './font/kefir/Kefir-Regular.otf',
});

const lemonMilkMedium = localFont({
 src: './font/lemon-milk/LEMONMILK-Medium.otf',
});

const QuranData = [
 {
  script:
   'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.',
  location: 'QS. Ar-Rum: 21',
 },
 {
  script: 'Siapa yang menikah maka sungguh ia telah diberi setengahnya ibadah.',
  location: 'HR. Abu Ya la',
 },
];

export default function Quran() {
 return (
  <main className="relative border-y-2">
   <Image
    className="w-full h-full object-cover object-center"
    src="/assets/gallery-quran.png"
    alt="gallery-quran"
    width={1440}
    height={545}
    quality={100}
   />

   <Carousel />
  </main>
 );
}
