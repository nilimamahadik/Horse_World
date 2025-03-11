import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/config/db';

export async function GET(req) {
    try {
        // Use `req.nextUrl` to extract query params in Next.js API routes
        const { searchParams } = new URL(req.nextUrl);
        const horseId = searchParams.get('horse_id');

        // console.log("horseId:", ownerId);

        if (!horseId) {
            return NextResponse.json({ status: 400, message: 'Missing horseId ' });
        }

        const db = await connectToDatabase();

        // Use backticks (`) for multi-line query
        const [horse] = await db.query(`
            SELECT 
              *
            FROM 
                hrs_horse_lineage 
            WHERE 
                horse_id = ?
        `, [horseId]);
        // console.log(horse);

        return NextResponse.json({ status: 200, data: horse });
    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ status: 500, message: 'Internal Server Error' });
    }
}
