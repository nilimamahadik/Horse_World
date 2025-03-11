import { compare } from "bcryptjs";
import connectToDatabase from '@/app/config/db';
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
        return NextResponse.json({ message: "Email and password are required" });
    }

    try {
        const connection = await connectToDatabase();

        // Fetch user from database
        const [rows] = await connection.query("SELECT * FROM hrs_owner_master WHERE Email = ?", [email]);

        //console.log("Query Result:", rows); // Debugging

        if (!rows || rows.length === 0) {
            return NextResponse.json({ message: "Invalid credentials" });
        }

        const user = rows[0]; // Extract first row

        if (!user.password) {
            //console.error("Password field is missing in DB:", user);
            return NextResponse.json({ message: "Password is missing in the database" });
        }

        // Compare hashed password
        const isMatch = await compare(password, user.password);
        //console.log("Password Match:", isMatch);

        if (!isMatch) {
            return NextResponse.json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user.OwnerID, email: user.Email },
            process.env.NEXT_PUBLIC_SECRET_KEY,
            { expiresIn: "1h" }
        );

        return NextResponse.json({
            status: 200,
            message: "Login successful",
            token,
            user: { id: user.OwnerID, email: user.Email, name: `${user.firstName} ${user.lastName}` }
        });
    } catch (error) {
        //console.error("Login Error:", error);
        return NextResponse.json({ message: "Internal Server Error" });
    }
}
