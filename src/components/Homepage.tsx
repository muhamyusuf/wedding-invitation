import localFont from 'next/font/local';

const spumoni = localFont({ src: './font/spumoni/spumoni-reguler.ttf' });
const lemonMilkLight = localFont({
 src: './font/lemon-milk/LEMONMILK-Light.otf',
});
const lemonMilkRegular = localFont({
 src: './font/lemon-milk/LEMONMILK-Regular.otf',
});

export default function HomePage() {
 return (
  <main className="flex relative min-h-screen flex-col items-center justify-around p-2 md:p-5 bg-[url('/assets/background.png')] bg-cover bg-no-repeat bg-center">
   <div className="flex justify-center items-center flex-col">
    <h1
     className={`${spumoni.className} flex flex-col justify-center items-center`}
    >
     <span className="text-2xl md:text-5xl">The Wedding Of</span>
     <span className="text-4xl md:text-[96px] mt-8">
      <span className="text-[115px]">R</span>IZKY &{' '}
      <span className="text-[115px]">D</span>INDA
     </span>
    </h1>

    <p className={`${lemonMilkLight.className} mt-10`}>18 FEBRUARI 2024</p>
   </div>

   <p className={`${lemonMilkRegular.className}`}>To someone</p>
  </main>
 );
}
