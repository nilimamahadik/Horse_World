import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/config/db';

export async function GET(req) {
    const url = new URL(req.url);

    try {


        const db = await connectToDatabase();

        // Use backticks (`) for multi-line query
        const [horse] = await db.query(`
            SELECT 
              *
            FROM 
                hrs_owner_master 
            
        `);
        // console.log(horse);

        return NextResponse.json({ status: 200, data: horse });
    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ status: 500, message: 'Internal Server Error' });
    }
}
