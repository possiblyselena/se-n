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
            </div>
        </div>
        <div className="font-shadow text-navyblue text-4xl">
          <button className=" bg-[length:100%] w-60 h-16 align-items-left">
            <a href="/projects" className="m-10">Projects</a>
          </button>
        </div>
      </main>
    </div>
    );
}