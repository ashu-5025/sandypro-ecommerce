import { writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  try {

    const formData =
      await request.formData();

    const file =
      formData.get("file") as File;

    if (!file) {

      return NextResponse.json(
        {
          error: "No file uploaded",
        },
        {
          status: 400,
        }
      );
    }

    const bytes =
      await file.arrayBuffer();

    const buffer =
      Buffer.from(bytes);

    const fileName =
      `${Date.now()}-${file.name}`;

    const uploadPath = path.join(
      process.cwd(),
      "public/uploads",
      fileName
    );

    await writeFile(
      uploadPath,
      buffer
    );

    return NextResponse.json({
      imageUrl:
        `/uploads/${fileName}`,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error: "Upload failed",
      },
      {
        status: 500,
      }
    );
  }
}