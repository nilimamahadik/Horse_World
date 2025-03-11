

import connectToDatabase from '@/app/config/db';
import { NextResponse } from 'next/server';
import fs from "fs/promises";
import path from 'path';

export async function POST(req) {
    try {
        const formData = await req.formData();
        console.log("Received FormData:", formData);




        const fields = {};
        for (const [key, value] of formData.entries()) {
            fields[key] = value;
        }
        const family = JSON.parse(fields.family);
        const virtualAnimal = family?.mother || "";
        const motherName = virtualAnimal.name
        const motherPhoto = virtualAnimal.image
        const father = family?.father || "";
        const fatherName = father.name
        const fatherPhoto = father.image
        const grandfather = family?.grandfather1 || "";
        const grandfather1 = grandfather.name
        const grandfather1Photo = grandfather.image
        const grandpa = family?.grandfather2 || "";
        const grandfather2 = grandpa.name
        const grandfather2Photo = grandpa.image
        const grandmother = family?.grandmother1 || "";
        const grandmother1 = grandmother.name
        const grandmother1Photo = grandmother.image
        const grandma = family?.grandmother2 || "";
        const grandmother2 = grandmother.name
        const grandmother2Photo = grandma.image


        const files = formData.getAll("photo");
        console.log("files", files);

        const uploadedFiles = [];
        if (files.length > 0) {
            for (const file of files) {
                if (!(file instanceof Blob)) {
                    console.error("Invalid file:", file);
                    continue;
                }

                const buffer = await file.arrayBuffer();
                const fileName = `${Date.now()}-${file.name}`;
                const filePath = path.join(process.cwd(), "public/documents", fileName);

                await fs.writeFile(filePath, Buffer.from(buffer));
                uploadedFiles.push({ originalName: file.name, filePath: `/documents/${fileName}` });
            }
        }
        console.log("Uploaded Files:", uploadedFiles);

        // Convert uploaded file paths to JSON for DB storage
        const fileUrlsJson = JSON.stringify(uploadedFiles.map(file => file.filePath));

        // Handle date formatting
        const formattedDob = fields.dob && fields.dob !== "undefined" ? new Date(fields.dob).toISOString().split('T')[0] : null;
        const formattedDod = fields.dod && fields.dod !== "undefined" ? new Date(fields.dod).toISOString().split('T')[0] : null;

        // Connect to MySQL Database
        const connection = await connectToDatabase();

        // Insert into `hrs_horse_master`
        const query = `
        INSERT INTO hrs_horse_master 
        (call_name, Registration_No, Sire_name, Dam_name, Sex, Date_of_birth, Date_of_death, Colour, Country_of_origin, Breeder_ID, OwnerID, Height, weight, Teeth, Birth_Marks, Pre_Title, Post_Title, Description, Place_of_Birth, Photo, Created_by, creation_date, updated_by, updated_date)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'user', CURRENT_DATE(), 'user', CURRENT_DATE());
        `;

        const values = [
            fields.callName, fields.regNo, fields.sire, fields.dam, fields.sex,
            formattedDob, formattedDod, fields.color, fields.country, fields.breeder,
            fields.owner, fields.height, fields.weight, fields.teeth, fields.birth_marks,
            fields.PreTitle, fields.PostTitle, fields.comments || '', fields.birth_place, fileUrlsJson
        ];

        const [insertResult] = await connection.execute(query, values);
        const insertedId = insertResult.insertId;

        console.log("Inserted Horse ID:", insertedId);

        // Insert into `hrs_horse_health`
        const sqlInsertHealth = `
        INSERT INTO hrs_horse_health 
        (horse_id, Elbow, Cardiac_results, Eyes, DNA_Testing, Epilepsy, created_by, creation_date, updated_by, updated_date)
        VALUES (?, ?, ?, ?, ?, ?, 'user', CURRENT_DATE(), 'user', CURRENT_DATE())
        `;

        const valuesHealth = [insertedId, "Elbow", "Cardiac_results", "Eyes", fields.dnaTesting, "Epilepsy"];
        await connection.execute(sqlInsertHealth, valuesHealth);

        // Insert into `hrs_horse_documents`
        const sqlInsertDoc = `
        INSERT INTO hrs_horse_documents 
        (horse_id, Health_certificate, Birth_certificate, created_by, creation_date, updated_by, updated_date)
        VALUES (?, ?, ?, 'user', CURRENT_DATE(), 'user', CURRENT_DATE())
        `;

        const valuesDoc = [insertedId, "Health_certificate", "Birth_certificate"];
        await connection.execute(sqlInsertDoc, valuesDoc);

        const lineage = `
        INSERT INTO hrs_horse_lineage (
            horse_id,horse_Name, motherName, motherPhoto, fatherName, fatherPhoto,
            grandfather1, grandfather1Photo, grandmother1, grandmother1Photo,
            grandfather2, grandfather2Photo, grandmother2, grandmother2Photo,
            created_by, creation_date, updated_by, updated_date
        ) VALUES (?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

        const currentDate = new Date().toISOString().slice(0, 19).replace("T", " ");

        const values_lineage = [
            insertedId,
            fields.callName,
            family.mother.name, family.mother.image,
            family.father.name, family.father.image,
            family.grandfather1.name, family.grandfather1.image,
            family.grandmother1.name, family.grandmother1.image,
            family.grandfather2.name, family.grandfather2.image,
            family.grandmother2.name, family.grandmother2.image,
            'user', currentDate, 'user', currentDate
        ];


        await connection.execute(lineage, values_lineage);

        return NextResponse.json({ message: "Horse saved successfully!", horseId: insertedId, status: 200 });

    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json({ message: 'Internal Server Error', status: 500 });
    }
}
