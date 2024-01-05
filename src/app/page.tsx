import Image from 'next/image';

import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import HomePage from '@/components/Homepage';
import Invitation from '@/components/Invitation';
import LoveStory from '@/components/LoveStory';
import ProfilMan from '@/components/ProfilMan';
import ProfilWoman from '@/components/ProfilWoman';
import Quran from '@/components/Quran';
import AnimatedDisc from '@/components/AnimatedDisc/AnimatedDisc';

export default function Home() {
 return (
  <div>
   <AnimatedDisc />
   <HomePage />
   <ProfilMan />
   <ProfilWoman />
   <Quran />
   <Invitation />
   <LoveStory />
   <Gallery />
   <Footer />
  </div>
 );
}
