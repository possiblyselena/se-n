'use client';
import Image from "next/image";
import React, { useState } from "react";
import Draggable from "react-draggable";
import { useRef } from "react";

export default function Home() {
    const nodeRef = useRef(null);
    return ( 
<div className="flex min-h-screen items-center justify-center dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-10 px-16 bg-white dark:bg-white sm:items-start"> 
        <div className="navyblue w-full">
          <h1 className="text-7xl font-shadow font-semibold text-navyblue dark:text-navyblue sm:text-6xl">
            About me
          </h1>
          <hr className="border-10 dark:border-highlight rounded-lg"></hr>
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
            <div className="py-4 text-2xl font-shadow text-navyblue">
                <p>I am currently a hs student who</p>
                <ul>
                    <li>★ goes to a lot of hackathons</li>
                    <li>★ organizes a lot of hackathons</li>
                    <li>★ is involved in FRC!</li>
                    <li>★ wants to pursue comp eng!</li>
                </ul>
            </div>
          </div>
          
        </div>
        <hr className="border-2 dark:border-navyblue bg-squiggle w-full"></hr>
          <h1 className="text-4xl font-shadow font-semibold text-navyblue dark:text-navyblue sm:text-5xl bg-[url(/squiggle.svg)] bg-covered h-20 w-70 align-items-center justify-center">
            outside of school
          </h1>
        <div className="grid grid-cols-4 justify-center items-center gap-10 py-10">
            <div></div>
            <Draggable nodeRef={nodeRef}>
                <div ref={nodeRef}className="bg-stickynote w-40 h-40 shadow-2xl grid grid-flow-col justify-center items-center z-10 cols-start-2">
                    <p className="font-shadow font-bold text-navyblue text-xl">photography</p>
                </div>
            </Draggable>
            <div></div>
            <Draggable nodeRef={nodeRef}>
                <div ref={nodeRef} className="bg-stickynote w-40 h-40 shadow-2xl grid grid-flow-col justify-center items-center z-10 cols-start-3">
                    <p className="font-shadow font-bold text-navyblue text-xl">pokemon</p>
                </div>
            </Draggable>
            <Draggable nodeRef={nodeRef}>
                <div ref={nodeRef}className="bg-stickynote w-40 h-40 shadow-2xl grid grid-flow-col justify-center items-center z-10 cols-start-4">
                    <p className="font-shadow font-bold text-navyblue text-xl">baking</p>
                </div>
            </Draggable>
            <div></div>
            <Draggable nodeRef={nodeRef}>
                <div ref={nodeRef} className="bg-stickynote w-40 h-40 shadow-2xl grid grid-flow-col justify-center items-center z-10">
                    <p className="font-shadow font-bold text-navyblue text-xl">piano</p>
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