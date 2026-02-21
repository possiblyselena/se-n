'use client';
import Image from "next/image";
import React, { useState } from "react";
import { useRef } from "react";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center dark:bg-black">
            <main className="flex min-h-scren w-full max-w-3xl flex-col items center justify-between py-10 px-16 bg-white dark:bg-white bg-[url(/dottedgrid.svg)] sm:items-start">
                <div className="navyblue w-full">
                    <div className="grid grid-cols-2">
                        <h1 className="text-9xl font-shadow font-semibold text-navyblue dark:text-navyblue sm:text-6xl">
                            Projects
                        </h1>
                        <div className="grid grid-cols-4 scale-85">
                            <a href="/">
                                <img src="/bluebookmark.svg">
                                </img>
                            </a>
                            <a href="/aboutme">
                                <img src="/purplebookmark.png">
                                </img>
                            </a>
                            <a href="/projects">
                                <img src="/greenbookmark.svg">
                                </img>
                            </a>
                            <a href="/contacts">
                                <img src="/pinkbookmark.svg">
                                </img>
                            </a>
                        </div>
                    </div>
                    <hr className="border-10 dark:border-highlight rounded-lg"></hr>
                </div>
                <h1 className="font-shadow font-semibold text-navyblue dark:text-navyblue sm:text-5xl grid-align-items-center justify-center">
                    cool stuff I've made!
                </h1>

                 <div className="py-4 grid grid-rows-4 gap-8">
                    <div className="font-shadow text-4xl text-navyblue dark:text-navyblue sm:text-3xl">
                        <h2 className="bg-[url('/squiggle.svg')] bg-[width-20%] bg-contain bg-no-repeat">
                        <a href="https://www.hammerhacks.ca/">Hammerhacks</a>
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
                                <span>140 Students Hosted at McMaster University in 2024</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span
                                    className="mt-1 h-5 w-5 bg-[url('/box.svg')] bg-contain bg-no-repeat"
                                />
                                <span>For 2026, I'm leading Hamerhacks II!</span>
                            </li>
                        </ul>
                    </div>
                    <div className="font-shadow text-4xl text-navyblue dark:text-navyblue sm:text-3xl">
                        <h2 className="bg-[url('/squiggle.svg')] bg-[width-20%] bg-contain bg-no-repeat">
                        <a href="https://scrapyard.hackclub.com/hamilton">Scrapyard</a>
                        </h2>
                        <ul className="py-4 text-2xl font-shadow text-navyblue rows-3 space-y-2">    
                            <li className="flex items-start gap-2">
                                <span
                                    className="mt-1 h-5 w-5 bg-[url('/box.svg')] bg-contain bg-no-repeat"
                                />
                                <span>Hamilton's first 24 hour high school hackathon!</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span
                                    className="mt-1 h-5 w-5 bg-[url('/box.svg')] bg-contain bg-no-repeat"
                                />
                                <span>I raised 1k by myself which was really cool!</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span
                                    className="mt-1 h-5 w-5 bg-[url('/box.svg')] bg-contain bg-no-repeat"
                                />
                                <span>50 people came and we had cool merch and food :)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="font-shadow text-4xl text-navyblue dark:text-navyblue sm:text-3xl">
                        <h2 className="bg-[url('/squiggle.svg')] bg-[width-20%] bg-contain bg-no-repeat">
                        <a href="https://github.com/possiblyselena/pokemon-vending-machine">TCG Vending Machine</a>
                        </h2>
                        <ul className="py-4 text-2xl font-shadow text-navyblue rows-3 space-y-2">    
                            <li className="flex items-start gap-2">
                                <span
                                    className="mt-1 h-5 w-5 bg-[url('/box.svg')] bg-contain bg-no-repeat"
                                />
                                <span>A custom vending machine that dipenses card booster packs!</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span
                                    className="mt-1 h-5 w-5 bg-[url('/box.svg')] bg-contain bg-no-repeat"
                                />
                                <span>
                                    <a href="https://www.instagram.com/p/DMhgdUJt8QJ/">
                                        Featured in the Highway Magazine Published on GitHub Education! 
                                    </a>
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span
                                    className="mt-1 h-5 w-5 bg-[url('/box.svg')] bg-contain bg-no-repeat"
                                />
                                <span>Made for <a href="https://highway.hackclub.com/">Highway</a> & <a href="https://undercity.hackclub.com/">Undercity</a> <a href="https://award.athena.hackclub.com/">& the Athena Award</a></span>
                            </li>
                        </ul>
                    </div>
                    <div className="font-shadow text-4xl text-navyblue dark:text-navyblue sm:text-3xl">
                        <h2 className="bg-[url('/squiggle.svg')] bg-[width-20%] bg-contain bg-no-repeat">
                        This very website!
                        </h2>
                        <ul className="py-4 text-2xl font-shadow text-navyblue rows-3 space-y-2">    
                            <li className="flex items-start gap-2">
                                <span
                                    className="mt-1 h-5 w-5 bg-[url('/box.svg')] bg-contain bg-no-repeat"
                                />
                                <span>Something I procrastinated really hard on</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span
                                    className="mt-1 h-5 w-5 bg-[url('/box.svg')] bg-contain bg-no-repeat"
                                />
                                <span>Designed with Figma and Built with Next.js!</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span
                                    className="mt-1 h-5 w-5 bg-[url('/box.svg')] bg-contain bg-no-repeat"
                                />
                                <span>Made for qualifying for the Campfire Flagship and Sleepover!</span>
                            </li>
                        </ul>
                    </div>
                    <div className="font-shadow text-navyblue text-4xl">
                        <button className="bg-[url('/nextpage.svg')] bg-[length:100%] w-60 h-16 align-items-right">
                        <a href="/contacts" className="m-10">Contact</a>
          </button>
        </div>
                </div>
            </main>
        </div>
    );
} 