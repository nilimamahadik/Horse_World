import bcrypt from "bcrypt"; // For hashing passwords
import connectToDatabase from '@/app/config/db';
import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();

    const {
        firstName,
        lastName,
        email,
        password,
        accountName,
        country,
        address1,
        address2,
        zip,
        city,
        state,
        phone,
        kennel,
        website,
        publicOptions,
        visibility,
        kennelInfo
    } = body;

    console.log("body", body);

    try {
        const connection = await connectToDatabase();

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert data into database
        const result = await connection.query(
            "INSERT INTO hrs_owner_master (firstName, lastName, Email, password, account_name, Country, Address1, Address2, Pincode, City, State, ContactNumber, kennel, website, public_options, visibility, kennel_info,Created_by,creation_date,updated_by,updated_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,'owner', CURRENT_DATE(), 'owner', CURRENT_DATE())",
            [firstName, lastName, email, hashedPassword, accountName, country, address1, address2, zip, city, state, phone, kennel, website, JSON.stringify(publicOptions), visibility, kennelInfo]
        );

        return NextResponse.json({ status: 200, message: "User registered successfully", userId: result.insertId });
    } catch (error) {
        console.error("Error saving user:", error);
        return NextResponse.json({ status: 500, message: "Internal Server Error" });
    }
}
