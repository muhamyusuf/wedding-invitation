import Image from 'next/image';
import localFont from 'next/font/local';

const kefirRegular = localFont({
 src: './font/kefir/Kefir-Regular.otf',
});
const lemonMilkRegular = localFont({
 src: './font/lemon-milk/LEMONMILK-Regular.otf',
});
const lemonMilkLight = localFont({
 src: './font/lemon-milk/LEMONMILK-Light.otf',
});

export default function ProfilMan() {
 return (
  <main className="flex flex-wrap relative min-h-screen items-center justify-around p-2 md:p-5 bg-[url('/assets/background-profilMan.png')] bg-cover bg-no-repeat bg-center">
   <div className="border">
    <Image
     src="/assets/profile-man.png"
     alt="profil-man"
     width={340}
     height={479}
    />
   </div>

   <div className="md:max-w-[50%] flex flex-col items-start justify-center gap-10">
    <p
     className={`flex flex-col text-xl items-start justify-center leading-7 ${lemonMilkLight.className}`}
    >
     <span className="font-bold">Muhammad Rizky Algifari, S.KM</span>
     <span className="italic">Putra pertama DARI</span>
     Bapak Riyanto, SH & Ibu Linda Yasmita
    </p>

    <div className="flex mt-10 gap-5">
     <p className={`md:max-w-[80%] text-lg ${kefirRegular.className}`}>
      Algifari, manusia paling cuek dan tidak bisa mengekspresikan perasaannya,
      Mungkin banyak orang melihat dia seperti anak kecil, tapi dia dewasa dalam
      berpikir dan sangat menghargai aku dan kedua orangtuaku. Cara bicara dia
      tidak pernah tinggi sekalipun dia marah (karena diem marahnya). Selalu
      mengingatkan aku dengan baik, aku sangat bersyukur bisa bertemu dengan
      algifari. Sudah dipertemukan dalam takdir Allah. Terimakasih sudah peduli
      dengan aku dan keluargaku. Aku Aku sangat menghargai kamu. I love you a
      lot and it &#x2019; s always been you
     </p>

     <div>
      <Image
       src="/assets/quotation-mark.png"
       alt="profil-man"
       width={34}
       height={30}
      />
     </div>
    </div>
   </div>

   <Image
    className="absolute bottom-0 right-0"
    src="/assets/overlay-man.png"
    alt="profil-man"
    width={314}
    height={314}
   />
  </main>
 );
}
