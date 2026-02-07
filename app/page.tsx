'use client';
import Image from "next/image";
import React, { useState } from "react";
import Draggable from "react-draggable";
import { useRef } from "react";

function getDaysInMonth(year: number, month: number){
    const firstDay = new Date(year, month, 1).getDay();
    const totalDay = new Date(year, month + 1, 0).getDate();

      return { firstDay, totalDay };  
}

export default function Home() {
  const nodeRef = useRef(null);

  const today = new Date();
  const [currentDate] = useState(
    new Date(today.getFullYear(), today.getMonth())
  );

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const { firstDay, totalDay } = getDaysInMonth(year, month);

  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-10 px-16 bg-white dark:bg-white sm:items-start bg-[url(/dottedgrid.svg)]"> 
        <div className="navyblue w-full">
          <div className="h-full grid grid-cols-2">
            <h1 className="text-9xl font-shadow font-semibold text-navyblue dark:text-navyblue">
            Selena
            </h1>
            <div className="grid grid-cols-4">
              <a href="">
                <img src="/bluebookmark.svg">
                </img>
              </a>
              <a href="/aboutme">
                <img src="/purplebookmark.png">
                </img>
              </a>
              <a href="/projects">
                <img src="/pinkbookmark.svg">
                </img>
              </a>
              <a href="/contacts">
                <img src="/greenbookmark.svg">
                </img>
              </a>
            </div>
          </div>
          <p className="mt-6 text-3xl font-shadow text-navyblue dark:text-navyblue p-2">
            Hello there! I'm a Grade 12 at OPSS looking into eng for post secondary. Take a look around to learn more :)
          </p>
          <div className="grid grid-cols-2">
            <div className=" border-4 border-solid text-navyblue dark:border-navyblue rounded-lg m-2">
                <div className="bg-highlight pt-2 font-shadow font-bold text-navyblue">
                  <ul className="grid grid-cols-7 text-center">
                    {['S', 'M', 'T', 'W', 'R', 'F', 'S'].map((day) => (
                      <li key={day}>{day}</li>
                    ))}
                  </ul>
                  <ul className="grid grid-cols-7 gap-2 text-center bg-white">
                    {Array.from({ length: firstDay }).map((_, i) => (
                      <li key={`empty-${i}`} />
                    ))}

                    {Array.from({ length: totalDay }).map((_, i) => {
                      const dayNumber = i + 1;

                      const isToday =
                        dayNumber === today.getDate() &&
                        month === today.getMonth() &&
                        year === today.getFullYear();

                      return (
                        <li
                          key={dayNumber}
                          className={`rounded-lg py-2 ${
                          isToday ? "bg-navyblue text-white font-bold" : ""
                            }`}>
                            {dayNumber}
                        </li>
                      );
                   })}
                  </ul>
                </div>
            </div>
             <div className="text-4xl font-shadow text-navyblue dark:border-navyblue grid justify-center items-center">
                  <h1>today's date is </h1>
                  <h1 className="text-5xl">{today.toLocaleDateString()}</h1>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-4xl font-shadow font-semibold text-navyblue dark:text-navyblue sm:text-5xl bg-[url(/squiggle.svg)] bg-[width:80%]">
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
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className="bg-stickynote w-60 h-60 shadow-2xs grid grid-flow-col justify-center items-center z-10 top-100 left-100 p-4">
              <p className="font-shadow font-bold text-navyblue text-xl">You can move me around!</p>
            </div>
        </Draggable>
        <div className="font-shadow text-navyblue text-4xl grid justify-center items-right">
          <button className="bg-[url(/nextpage.svg)] bg-[length:100%] w-60 h-16 justify-center items-center">
            <a href="/aboutme" className="m-10">See more!</a>
          </button>
        </div>
        <div className="grid grid-cols-4">
          <img src="/bluebookmark.svg">
          </img>
          <img src="/greenbookmark.svg">
          </img>
          <img src="/purplebookmark.png">
          </img>
          <img src="/pinkbookmark.svg">
          </img>
        </div>
      </main>
    </div>
  );
}
