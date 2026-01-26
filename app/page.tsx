import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-white sm:items-start"> 
        <div className="">
          <h1 className="text-5xl font-shadow text-navyblue dark:text-navyblue sm:text-6xl">
            Selena
          </h1>
          <p className="mt-6 text-lg font-shadow text-navyblue dark:text-navyblue">
            Hello there! I'm a Grade 12 at OPSS looking into eng for post secondary. Take a look around to learn more :)
          </p>  
        </div>
        <div>
          <h1 className="text-4xl font-shadow text-navyblue dark:text-navyblue sm:text-5xl">
            goals for 2025/2026
          </h1>
        </div>
      </main>
    </div>
  );
}
