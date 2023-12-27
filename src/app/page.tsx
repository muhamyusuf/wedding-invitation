import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-center p-2 md:p-5">
      <Image src="/assets/welcome.png" alt='welcome' width={1088} height={842} className='z-10 w-[100%] h-[100%] md:w-[50%] hidden md:block md:h-[50%]' />

      <Image src="/assets/welcome-mobile.png" alt='welcome' width={347} height={606} quality={100} className='z-10 w-[100%] h-[100%] block md:hidden' />

      <Image src="/assets/backround.jpg" alt='backround' width={5120} height={2880} className='absolute  inset-0 -z-20 w-full h-full brightness-50' />

      <div className='flex flex-col items-center justify-center w-full h-full'>
        <p className='text-xl'>Dear...</p>

        <p>｛someone｝</p>

        <button className='shadow-sm mt-10 p-1 flex justify-center items-center bg-transparent border rounded-full'>
          <div className='w-full py-2 px-10 bg-white/20 rounded-full'>Open Invitation</div>
        </button>
      </div>
    </main>
  )
}
