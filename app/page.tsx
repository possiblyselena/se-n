'use client';
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const today = new Date();
  const date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  /*const months = [January, February, March, April, May, June, July, August, September, October, November, December];*/
  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-10 px-16 bg-white dark:bg-white sm:items-start"> 
        <div className="">
          <h1 className="text-7xl font-shadow font-semibold text-navyblue dark:text-navyblue sm:text-6xl">
            Selena
          </h1>
          <hr className="border-10 dark:border-highlight rounded-lg"></hr>
          <p className="mt-6 text-2xl font-shadow text-navyblue dark:text-navyblue">
            Hello there! I'm a Grade 12 at OPSS looking into eng for post secondary. Take a look around to learn more :)
          </p> 
          <div className="columns-2 py-4">
            <div className=" border-4 border-solid py-10 text-navyblue dark:border-navyblue rounded-lg align-center justify-center">
              <div className="bg-highlight rounded-lg font-shadow font-bold text-navyblue columns-7 items-center justify-center">
                <p>S</p>
                <p>M</p>
                <p>T</p>
                <p>W</p>
                <p>R</p>
                <p>F</p>
                <p>S</p>
              </div>
            <div>

            </div>
            <div>

            </div>
            </div>
            <div className="text-4xl font-shadow text-navyblue dark:border-navyblue rows-2">
              <h1>today's date is</h1>
              <p id="current date">{date}</p>
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
        <div className="font-shadow text-navyblue text-4xl">
          <button className="bg-[url(/nextpage.svg)] bg-[length:100%] w-60 h-16 align-items-left">
            <a href="/aboutme" className="m-10">See more!</a>
          </button>
            
        </div>
      </main>
    </div>
  );
}
