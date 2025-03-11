import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/config/db';

export async function GET(req) {
    const url = new URL(req.url);

    try {
        // Use `req.nextUrl` to extract query params in Next.js API routes
        const { searchParams } = new URL(req.nextUrl);
        const ownerId = searchParams.get('id');

        // console.log("horseId:", ownerId);

        if (!ownerId) {
            return NextResponse.json({ status: 400, message: 'Missing ownerId ' });
        }

        const db = await connectToDatabase();

        // Use backticks (`) for multi-line query
        const [horse] = await db.query(`
            SELECT 
              *
            FROM 
                hrs_owner_master 
            WHERE 
                OwnerID = ?
        `, [ownerId]);
// console.log(horse);

        return NextResponse.json({ status: 200, data: horse });
    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ status: 500, message: 'Internal Server Error' });
    }
}
