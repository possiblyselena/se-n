import { sql } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  const entries = await sql`
    SELECT * FROM guestbook
    WHERE created_at >= date_trunc('month', now())
    ORDER BY created_at DESC
  `
  return NextResponse.json(entries)
}

export async function POST(req: Request) {
  const { name, message } = await req.json()

  if (!name || !message) {
    return NextResponse.json({ error: 'Name and message are required' }, { status: 400 })
  }

  const [entry] = await sql`
    INSERT INTO guestbook (name, message)
    VALUES (${name}, ${message})
    RETURNING *
  `
  return NextResponse.json(entry, { status: 201 })
}