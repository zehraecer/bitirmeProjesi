import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {

    const supabase = createClient()

    const { data: { session }, error } = await supabase.auth.getSession()

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ session }, { status: 200 })
}

