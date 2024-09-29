"use server";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
    const supabase = createClient();

    const { data: Products_basket, error: BasketError } = await supabase.from('Products_basket').select('*')
    if (BasketError) {
        console.log(BasketError);
        return NextResponse.json({ BasketError: BasketError.message }, { status: 500 })
    }

    return NextResponse.json({ Products_basket }, { status: 200 })


}
