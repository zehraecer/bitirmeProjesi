"use server";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function PUT(request) {
    const supabase = createClient();
    const { data, error } = await supabase.from("Products_basket").update({ stock }).eq("id", id);

    const { id, stock } = await request.json();

    if (!id || stock === undefined) {
        return NextResponse.json({ message: "Product ID and stock value are required" }, { status: 400 });
    }


    if (error) {
        console.error("Error updating product:", error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Product updated successfully", data }, { status: 200 });
}
