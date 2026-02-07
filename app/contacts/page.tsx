'use client';
import Image from "next/image";
import React, { useState} from 'react';
import { useRef} from "react";

export default function Home() {

    return (
        <div className="flex min-h-screen items-center justify-center dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center bg-white dark:bg-white bg-[url(/dottedgrid.svg)] sm:items-start">
                <div className="">
                    <h2 className="font-shadow font-semibold text-navyblue dark:text-navyblue sm:text-7xl">
                        Contacts!
                    </h2>
                </div>
                <hr className="w-full border-10 dark:border-highlight rounded-lg"></hr>
                <div className="font-shadow text-navyblue text-2xl py-4">
                    <p>Hello I am so awesome sauce and you should contact me on my following social!</p>
                </div>
                <ul className="font-shadow text-navyblue text-2xl">
                    <li>Email</li>
                    <li>linkedin</li>
                    <li>github</li>
                    <li>instagram</li>
                </ul>
                <div>
                    <h2 className="font-shadow font-semibold text-navyblue">Additionally, sign my guestbook vvv</h2>
                </div>
            </main>
        </div>
    );
}