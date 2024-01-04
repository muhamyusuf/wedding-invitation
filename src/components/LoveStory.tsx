import Image from 'next/image';
import localFont from 'next/font/local';

const palatino = localFont({
 src: './font/palatino/Palatino.ttf',
});

export default function LoveStory() {
 return (
  <main className="flex flex-wrap relative min-h-screen items-center justify-around p-2 md:p-5 bg-[url('/assets/background-lovestory.png')] bg-cover bg-no-repeat bg-right">
   <div className="text-black">
    <h2 className="text-[32px] font-bold font-serif ml-5">Love Story</h2>

    <div
     className={`w-[581px] h-[472px] flex flex-col gap-10  backdrop-blur-md p-5 rounded-lg border font-serif`}
    >
     <div>
      <h3 className="font-bold text-[24px]">&#x2022; First Meet</h3>
      <p>
       Saat menempuh pendidikan dengan jurusan dan fakultas yang sama di
       universitas yang sama juga.
      </p>
     </div>
     <div>
      <h3 className="font-bold text-[24px]">&#x2022; Engagement</h3>
      <p>
       Alhamdulillah memutuskan untuk ke jenjang yang lebih serius. Atas ridho
       Allah dan orangtua.
      </p>
     </div>
     <div>
      <h3 className="font-bold text-[24px]">&#x2022; Married</h3>
      <p>
       InsyaAllah akan dilaksanakan pernikahan, setengah ibadah telah dilakukan.
       Sesuai Surat An-Nur ayat 32 : “Dan kawinkanlah orang-orang yang sendirian
       di antara kamu, dan orang-orang yang layak (berkawin) dari hamba-hamba
       sahayamu yang lelaki dan hamba-hamba sahayamu yang perempuan. Jika mereka
       miskin Allah akan memampukan mereka dengan karunia-Nya. Dan Allah Maha
       luas (pemberian-Nya) lagi Maha Mengetahui.“
      </p>
     </div>
    </div>
   </div>
   <div>
    <div className="-mt-[300px]">
     <Image
      className="w-[553px] h-[155px] object-cover object-center"
      src="/assets/rizky-dinda-textwedding.png"
      alt="rizky-dinda-textwedding"
      width={2212}
      height={620}
      quality={100}
     />

     <div className="w-[547px] text-black h-full backdrop-blur-md p-5 rounded-lg border font-serif">
      What counts in making a happy marriage is not so much how compatible you
      are, but how you deal with incompatibility. A great marriage is not when
      the perfect couple comes together. It is when an imperfect couple learns
      to enjoy their differences.
     </div>
    </div>
   </div>
  </main>
 );
}
