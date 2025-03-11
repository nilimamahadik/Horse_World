import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/config/db';

export async function GET(req) {

    const url = new URL(req.url);
    try {
        // Use `req.nextUrl` to extract query params in Next.js API routes
        const { searchParams } = new URL(req.nextUrl);
        const horseId = searchParams.get('id');

        // console.log("horseId:", horseId);

        if (!horseId) {
            return NextResponse.json({ status: 400, message: 'Missing horse ID' });
        }

        const db = await connectToDatabase();

        // Use backticks (`) for multi-line query
        const [horse] = await db.query(`
            SELECT 
                call_name,
                Registration_No,
                Sire_name,
                Dam_name,
                Sex,
                Date_of_birth,
                Date_of_death,
                Teeth,
                Place_of_Birth,
                Birth_Marks,
                Pre_Title,
                Post_Title,
                Colour,
                Photo,
                Breeder_ID,
                OwnerID,
                Country_of_origin,
                Height,
                Weight,
                Description,
                Created_by,
                creation_date
            FROM 
                hrs_horse_master 
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
