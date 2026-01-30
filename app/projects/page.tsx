'use client';
import Image from "next/image";
import React, { useState } from "react";
import { useRef } from "react";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center dark:bg-black">
            <main className="flex min-h-scren w-full max-w-3xl flex-col items center justify-between py-10 px-16 bg-white dark:bg-white sm:items-start">
                <div className="navyblue w-full">
                    <h1 className="text-7xl font-shadow font-semibold text-navyblue dark:text-navyblue sm:text-6xl">
                        Projects
                    </h1>
                    <hr className="border-10 dark:border-highlight rounded-lg"></hr>
                </div>
                <h1 className="font-shadow font-semibold text-navyblue dark:text-navyblue sm:text-5xl grid-align-items-center justify-center">
                    cool stuff I've made!
                </h1>

                 <div className="py-4 grid grid-cols-2 gap-8">
                <div className="font-shadow text-4xl text-navyblue dark:text-navyblue sm:text-3xl">
                    <h2 >
                        Hammerhacks
                    </h2>
                    <ul className="py-4 text-2xl font-shadow text-navyblue rows-3 space-y-2">    
                        <li className="flex items-start gap-2">
                            <span
                                className="mt-1 h-5 w-5 bg-[url('/box.svg')] bg-contain bg-no-repeat"
                            />
                            <span>Hamilton's biggest high school hackathon!</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span
                                className="mt-1 h-5 w-5 bg-[url('/box.svg')] bg-contain bg-no-repeat"
                            />
                            <span>2</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span
                                className="mt-1 h-5 w-5 bg-[url('/box.svg')] bg-contain bg-no-repeat"
                            />
                            <span>3</span>
                        </li>
                    </ul>
                </div>
                </div>
            </main>
        </div>
    );
} 