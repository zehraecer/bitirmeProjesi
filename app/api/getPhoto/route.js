"use server"
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from 'next/server';

export async function POST(request) {
    const supabase = createClient();
    const formData = await request.formData();
    const file = formData.get('file');

    try {
        const { name } = file;
        const { data: dataImg, error: imgError } = await supabase
            .storage
            .from('Products_images')
            .upload(`uploads/${Date.now()}_${name}`, file);

        if (imgError) {
            return NextResponse.json({ error: imgError.message }, { status: 500 });
        }

        const filePath = dataImg.path;
        const { data: publicUrlData, error: publicUrlError } = supabase
            .storage
            .from('Products_images')
            .getPublicUrl(filePath);

        if (publicUrlError) {
            return NextResponse.json({ error: publicUrlError.message }, { status: 500 });
        }

        return NextResponse.json({ imageUrl: publicUrlData.publicUrl }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
