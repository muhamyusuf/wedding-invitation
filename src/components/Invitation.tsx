import Image from 'next/image';
import localFont from 'next/font/local';

const spumoni = localFont({ src: './font/spumoni/spumoni-reguler.ttf' });

export default function Invitation() {
 return (
  <main className="flex relative min-h-screen p-2 md:p-20 h-full bg-[url('/assets/background-invitation.png')] bg-cover bg-no-repeat bg-center">
   <div className="flex absolute  flex-col justify-center items-center h-[80%] top-50 flex-2">
    <Image
     src="/assets/overlay-invitation.png"
     alt="overlay-invitation"
     width={159}
     height={190}
     quality={100}
    />

    <p className={`${spumoni.className} text-[45px]`}>Wedding event</p>
   </div>

   <div className="flex flex-wrap justify-end items-start gap-2">
    <div className="flex justify-center items-center gap-2 flex-wrap">
     <Image
      src="/assets/invitation-1.png"
      alt="invitation-1"
      width={516}
      height={339}
      quality={100}
     />

     <Image
      src="/assets/invitation-2.png"
      alt="invitation-2"
      width={443}
      height={339}
      quality={100}
     />
    </div>

    <div className="flex justify-center items-center gap-2 flex-wrap">
     <Image
      src="/assets/invitation-3.png"
      alt="invitation-3"
      width={680}
      height={394}
      quality={100}
     />
     <Image
      src="/assets/invitation-4.png"
      alt="invitation-4"
      width={279}
      height={396}
      quality={100}
     />
    </div>
   </div>
  </main>
 );
}
