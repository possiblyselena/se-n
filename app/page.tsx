import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-white sm:items-start"> 
        <div className="">
          <h1 className="text-5xl font-bold text-navy-blue dark:text-navy-blue sm:text-6xl">
            Selena
          </h1>
          <p className="mt-6 text-lg text-navy-blue dark:text-gray-300">
            Hello there! I'm a Grade 12 at OPSS looking into eng for post secondary. Take a look around to learn more :)
          </p>  
        </div>
      </main>
    </div>
  );
}
