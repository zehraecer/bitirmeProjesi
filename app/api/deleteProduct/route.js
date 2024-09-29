"use server";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function DELETE(request) {
    const supabase = createClient();

    const { id } = await request.json();

    if (!id) {
        return NextResponse.json({ message: "Product ID is required" }, { status: 400 });
    }

    const { data, error } = await supabase.from("Products_basket").delete().eq("id", id);

    if (error) {
        console.error("Error deleting product:", error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Product deleted successfully", data }, { status: 200 });
}
