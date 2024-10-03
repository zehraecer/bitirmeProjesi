"use server"
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from 'next/server';

export async function POST(request) {
    const supabase = createClient();

    const { title, price, img, stock, user_eposta, user_name, discount } = await request.json();

    const { data, error } = await supabase
        .from('Products_basket')
        .insert([{ title: title, price: price, discount: discount, img: img, stock: stock, user_eposta: user_eposta, user_name: user_name }])
        .select();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
}
