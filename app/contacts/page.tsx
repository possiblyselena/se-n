'use client';
import Image from "next/image";
import React, { useState} from 'react';
import { useRef} from "react";
import { useEffect } from "react";

type  Entry = {
    id: number
    name: string 
    message: string
    created_at: string
}
export default function Home() {
    const [entries, setEntries] = useState<Entry[]>([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('/api/')
        .then(r =>r.json())
        .then(setEntries)
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        const res = await fetch('/api', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name, message })
        })

        if (res.ok) {
            const newEntry = await res.json()
            setEntries([newEntry, ...entries])
            setName('')
            setMessage('')
        }
        setLoading(false)
    }
    return (
        <div className="flex min-h-screen items-center justify-center dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-10 px-16 bg-white dark:bg-white sm:items-start bg-[url(/dottedgrid.svg)]">
                <div className="h-full grid grid-cols-2">
                    <h2 className="font-shadow font-semibold text-navyblue dark:text-navyblue sm:text-8xl ">
                        Contacts!
                    </h2>
                    <div className="grid grid-cols-4 scale-90">
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
                <hr className="w-full border-10 dark:border-highlight rounded-lg"></hr>
                <div className="font-shadow text-navyblue text-2xl py-4">
                    <p>If you thought anything was cool on this page, you should contact me or follow any of my socials below!</p>
                </div>
                <div className="w-full flex items-center justify-center font-shadow text-4xl py-4">
                        <button className="bg-navyblue w-80 h-20 flex items-center justify-center rounded-lg">
                            <a href="mailto:selena@events.hackclub.com">
                             Email
                            </a>
                        </button>
                        <button className="bg-navyblue w-80 h-20 flex items-center justify-center rounded-lg">
                            <a href="https://www.linkedin.com/in/selena-nguyen-0b7287321/">
                                    LinkedIn
                            </a>
                        </button>
                </div>
                <div className="font-shadow w-full flex items-center justify-center text-4xl">
                        <button className="bg-navyblue w-80 h-20 flex items-center justify-center rounded-lg">
                            <a href="https://github.com/possiblyselena">
                                GitHub
                            </a>
                        </button>
                        <button className="bg-navyblue w-80 h-20 flex items-center justify-center rounded-lg">
                            <a href="https://www.instagram.com/s_nguyen080">
                                Instagram
                            </a>
                        </button>
                </div>
                <div className="font-shadow text-navyblue text-2xl py-4 w-full">
                    <h2 className="font-shadow font-semibold text-navyblue text-4xl">Additionally, sign my guestbook vvv</h2>
                    <hr className="border-10 dark:border-highlight rounded-lg flex flex-col"></hr>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4 bg-stickynote w-60 h-60 shadow-2xs">
                        <div>
                            <label htmlFor="name">Name</label>
                            <div>
                                <input
                                className="w-full items-center justify-center"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your name"
                                />  
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea
                                className="w-full h-20"
                                id="message"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                placeholder="Write me something!"
                                />
                        </div>
                        <button type="submit" disabled={loading} className="bg-navyblue text-white px-4 py-2 rounded">
                            Send!
                        </button>
                        </form>
                        <section className="align-center mt-10">
                            <h2>Entries</h2>
                            {entries.length === 0 && <p>No entries yet</p>}
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                {entries.slice(0, 6).map(entry => (
                                <div key={entry.id} className="bg-stickynote w-60 h-60 shadow-2xs">
                                    <strong>{entry.name}</strong>
                                    <p>{entry.message}</p>
                                    <time>{new Date(entry.created_at).toLocaleDateString()}</time>
                                </div>
                            ))}
                            </div>
                            {/* optionally show a button to load more entries */}
                            {entries.length > 6 && (
                                <button
                                    className="mt-4 text-navyblue underline"
                                    onClick={() => setEntries(entries)} // placeholder if implementing pagination state
                                >
                                    Show more
                                </button>
                            )}
                        </section>
                </div>
            </main>
        </div>
    );
}