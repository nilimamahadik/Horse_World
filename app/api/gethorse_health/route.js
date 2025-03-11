import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/config/db';

export async function GET(req) {
    const url = new URL(req.url);
    try {
        const { searchParams } = new URL(req.url);
        const horseId = searchParams.get('id');

        console.log("horseId", horseId);
        if (!horseId) {
            return NextResponse.json({ status: 400, message: 'Missing horse ID' });
        }

        const db = await connectToDatabase();


        const [horse] = await db.query('SELECT * FROM hrs_horse_health WHERE horse_id = ?', [horseId]);

        // console.log("horse", horse);

        return NextResponse.json({ status: 200, data: horse });
    } catch (error) {
        return NextResponse.json({ status: 500, message: 'Internal Server Error' });
    }
}
