import connectToDatabase from '@/app/config/db';
import { NextResponse } from 'next/server';
// export async function GET(request) {
//     const url = new URL(request.url); // Fix: Use the request parameter

export async function GET(req) {

    const url = new URL(req.url);


    try {
        const connection = await connectToDatabase();
        const [horses] = await connection.execute(`
            SELECT 
            horse_id,
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
        `);

        return NextResponse.json({ horses, status: 200 });
    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json({ message: 'Internal Server Error', status: 500 });
    }
}
