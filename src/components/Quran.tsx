import Image from 'next/image';
import Carousel from './ui/Carousel';

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
