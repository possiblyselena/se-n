'use client';
import Image from "next/image";
import React, { useState } from "react";
import Draggable from "react-draggable";
import { useRef } from "react";

export default function Home() {
    const nodeRef = useRef(null);
    return ( 
<div className="flex min-h-screen items-center justify-center dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-10 px-16 bg-[url(/dottedgrid.svg)] bg-repeat sm:items-start"> 
        <div className="navyblue w-full">
          <div className=" grid grid-cols-2 align-items-center    ">
            <h1 className="text-7xl font-shadow font-semibold text-navyblue dark:text-navyblue">
            About me
            </h1>
            <div className=" grid grid-cols-4 scale-90">
              <a href="/">
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
          <hr className="border-8 dark:border-highlight rounded-lg"></hr>
          <div className="columns-2 py-4">
            <div>
                <Image
                    src="/profile.png"
                    alt="Picture of Selena"
                    width={250}
                    height={350}
                    className="rounded-lg border-4 border-solid border-navyblue"
                />
             </div>
             <div className="font-shadow text-navyblue">
              <p className="text-4xl">I am currently a hs student who</p>
              <ul className="text-3xl list-disc">
                <li>goes to a lot of hackathons</li>
                <li>organizes a lot of hackathons</li>
                <li>is involved in FRC!</li>
                <li>wants to pursue comp eng</li>
              </ul>
             </div>
            </div>
        </div>
        <hr className="w-full border-2 dark:border-navyblue rounded-lg"></hr>
        <h1 className="font-shadow text-navyblue text-6xl bg-[url(/squiggle.svg)]">
          Outside of School
        </h1>
        <div className="grid grid-cols-6 gap-4 text-3xl">
          <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className="bg-stickynote w-50 h-50 shadow-2xl grid grid-flow-col justify-center items-center z-10 p-4 col-start-2 span-3">
              <p className="font-shadow font-bold text-navyblue">Baking!</p>
            </div>
          </Draggable>
          <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className="bg-stickynote w-50 h-50 shadow-2xl grid grid-flow-col justify-center items-center z-10 p-4 col-start-5 span-3">
              <p className="font-shadow font-bold text-navyblue">photography!</p>
            </div>
          </Draggable>
          <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className="bg-stickynote w-50 h-50 shadow-2xl grid grid-flow-col justify-center items-center z-10 p-4 col-start-1 span-3">
              <p className="font-shadow font-bold text-navyblue">other things</p>
            </div>
          </Draggable>
          <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className="bg-stickynote w-50 h-50 shadow-2xl grid grid-flow-col justify-center items-center z-10 p-4 col-start-4 span-2">
              <p className="font-shadow font-bold text-navyblue span-4">other thingys!</p>
            </div>
          </Draggable>
        </div>
        <div className="font-shadow text-navyblue text-4xl">
          <button className="bg-[url(/nextpage.svg)] bg-[length:100%] w-60 h-16 align-items-left">
            <a href="/projects" className="m-10">Projects</a>
          </button>
        </div>
      </main>
    </div>
    );
}