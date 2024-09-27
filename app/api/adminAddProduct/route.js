"use server";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request) {
    const supabase = createClient();

    const { description, category, price, stock, product_color, product_img } = await request.json();

    try {
        const { data, error } = await supabase
            .from("Products")
            .insert([{ description, category, price, stock, product_color, product_img }])
            .select();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ message: "Ürün başarıyla eklendi", data }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
