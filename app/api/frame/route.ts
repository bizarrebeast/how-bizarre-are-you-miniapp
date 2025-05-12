import { NextResponse } from "next/server";

export async function POST(req: Request) {
  return NextResponse.json({ message: "This will soon return your BIZARRE score." });
}
