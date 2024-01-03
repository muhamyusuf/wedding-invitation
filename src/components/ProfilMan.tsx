import Image from 'next/image';

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
    <p className="flex flex-col items-start justify-center leading-4">
     <span className="font-bold">Muhammad Rizky Algifari, S.KM</span>
     <span className="italic">Putra pertama DARI</span>
     Bapak Riyanto, SH & Ibu Linda Yasmita
    </p>

    <div>
     <p>
      Algifari, manusia paling cuek dan tidak bisa mengekspresikan perasaannya,
      Mungkin banyak orang melihat dia seperti anak kecil, tapi dia dewasa dalam
      berpikir dan sangat menghargai aku dan kedua orangtuaku. Cara bicara dia
      tidak pernah tinggi sekalipun dia marah (karena diem marahnya). Selalu
      mengingatkan aku dengan baik, aku sangat bersyukur bisa bertemu dengan
      algifari. Sudah dipertemukan dalam takdir Allah. Terimakasih sudah peduli
      dengan aku dan keluargaku. Aku Aku sangat menghargai kamu. I love you a
      lot and it &#x2019; s always been you
     </p>
    </div>
   </div>
  </main>
 );
}
