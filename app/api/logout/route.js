"use server"
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request) {

    const supabase = createClient()

    const { error } = await supabase.auth.signOut()
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Çıkış yapıldı" }, { status: 200 });
}