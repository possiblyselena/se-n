import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-10 px-16 bg-white dark:bg-white sm:items-start"> 
        <div className="">
          <h1 className="text-5xl font-shadow text-navyblue dark:text-navyblue sm:text-6xl">
            Selena
          </h1>
          <hr className="border-10 dark:border-highlight rounded-lg"></hr>
          <p className="mt-6 text-2 xl font-shadow text-navyblue dark:text-navyblue">
            Hello there! I'm a Grade 12 at OPSS looking into eng for post secondary. Take a look around to learn more :)
          </p> 
          <div className="columns-2 py-4">
            <div className=" border-4 border-solid py-10 text-navyblue dark:border-navyblue rounded-lg">
              <div className="columns-7 row-4">
                s m t w r f s

              </div>
            </div>
            <div className="text-4xl font-shadow text-navyblue dark:border-navyblue rows-2">
              <h1>today's date is</h1>
              <h2>insert date here</h2>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-4xl font-shadow text-navyblue dark:text-navyblue sm:text-5xl bg-[url(/squiggle.svg)] bg-[width:80%]">
            goals for 2025/2026
          </h1>
          <hr className="border-2 dark:border-navyblue bg-squiggle"></hr>
          <ul className="py-4 text-2xl font-shadow text-navyblue columns-2">
            <li>★ make a video</li>
            <li>★ run a 15k</li>
            <li>★ get into university</li>
            <li>★ship a fully functional app</li>
            <li>★ internship?</li>
            <li>★ hammerhacks II</li>
            <li>★ win, something!</li>
            <li>★ start investing</li>
          </ul>
        </div>
        <div>
          <div>
            <a href="/aboutme">See more!</a>
          </div>
        </div>
      </main>
    </div>
  );
}
