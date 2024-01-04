import Image from 'next/image';
import localFont from 'next/font/local';

const kefirRegular = localFont({
 src: './font/kefir/Kefir-Regular.otf',
});
const lemonMilkLight = localFont({
 src: './font/lemon-milk/LEMONMILK-Light.otf',
});

export default function ProfilWoman() {
 return (
  <main className="flex flex-wrap relative min-h-screen items-center justify-around p-2 md:p-5 bg-[url('/assets/background-profilMan.png')] bg-cover bg-no-repeat bg-center">
   <div className="md:max-w-[50%] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] flex flex-col items-end justify-center gap-10">
    <p
     className={`flex flex-col text-xl text-end items-end justify-center leading-7 ${lemonMilkLight.className}`}
    >
     <span className="font-bold">Dinda Sakdiah Febriani, S.KM</span>
     <span className="italic">Putri pertama DARI</span>
     Bapak Sodikin & Ibu Ida Rosidah
    </p>

    <div className="flex justify-end mt-10 gap-5">
     <div className="items-end flex">
      <Image
       className="transform rotate-180"
       src="/assets/quotation-mark.png"
       alt="quotation-mark"
       width={34}
       height={30}
      />
     </div>

     <p className={`md:max-w-[80%] text-lg text-end ${kefirRegular.className}`}>
      DINDA SAKDIAH FEBRIANI, perempuan cantik, manis, imut, lucu, penyabar,
      pengertian, baik hati, dan lemah lembut. Perempuan yang tidak pernah lelah
      menghadapi pribadiku, perempuan yang selalu sabar saat diriku marah besar,
      dan perempuan yang tidak pernah menyerah belajar segalanya tentang ku.
      itulah dia calon istri ku, perempuan terbaik dan terhebat yang dikirimkan
      Allah pada ku setelah ibuku.
      <br /> <br />I love you a lot and it &#x2019; s always been you
     </p>
    </div>
   </div>

   <div>
    <Image
     src="/assets/profile-woman.png"
     alt="profil-woman"
     width={340}
     height={479}
     quality={100}
    />
   </div>

   <Image
    className="absolute top-0 left-10"
    src="/assets/overlay-woman.png"
    alt="overlay-woman"
    width={250}
    height={341}
    quality={100}
   />
  </main>
 );
}
