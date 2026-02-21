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
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center bg-white dark:bg-white bg-[url(/dottedgrid.svg)] sm:items-start">
                <div className="">
                    <h2 className="font-shadow font-semibold text-navyblue dark:text-navyblue sm:text-9xl">
                        Contacts!
                    </h2>
                </div>
                <hr className="w-full border-10 dark:border-highlight rounded-lg"></hr>
                <div className="font-shadow text-navyblue text-2xl py-4">
                    <p>If you thought anything was cool on this page, you should contact me or follow any of my socials below!</p>
                </div>
                <ul className="font-shadow text-navyblue text-2xl">
                    <li>
                        <a href="mailto:selena@events.hackclub.com">
                            Email
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/selena-nguyen-0b7287321/">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/possiblyselena">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/s_nguyen080">
                            Instagram
                        </a>
                    </li>
                </ul>
                <div className="font-shadow text-navyblue text-2xl py-4">
                    <h2 className="font-shadow font-semibold text-navyblue text-4xl">Additionally, sign my guestbook vvv</h2>
                    <hr className="border-10 dark:border-highlight rounded-lg"></hr>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
                        <div>
                            <input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your name"
                                />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea
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
                                {entries.map(entry => (
                                <div key={entry.id} className="bg-stickynote w-60 h-60 shadow-2xs">
                                    <strong>{entry.name}</strong>
                                    <p>{entry.message}</p>
                                    <time>{new Date(entry.created_at).toLocaleDateString()}</time>
                                </div>
                            ))}
                            </div>
                        </section>
                </div>
            </main>
        </div>
    );
}