"use server";

import { createClient } from "@/utils/supabase/server";

export async function NewProductForm(formData) {

    const supabase = createClient()

    const { data: { session }, error } = await supabase.auth.getSession()

    const sessionEposta = session.user.email
    try {
        const photoResponse = await fetch('http://localhost:3000/api/getPhoto', {
            method: 'POST',
            body: formData,
        });

        const { session } = photoResponse
        console.log(session);

        if (!photoResponse.ok) {
            const photoData = await photoResponse.json();
            console.error(photoData);
            throw new Error("Resim yükleme hatası.");
        }

        const { imageUrl } = await photoResponse.json();
        console.log("Yüklenen Resim URL'si:", imageUrl);

        if (sessionEposta === "zehra@gmail.com") {
            const response = await fetch('http://localhost:3000/api/adminAddProduct', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    description: formData.get("description"),
                    category: formData.get("category"),
                    price: formData.get("price"),
                    discount_rate: formData.get("discount"),
                    product_img: imageUrl,
                    stock: formData.get("stock"),
                    product_color: formData.get("color"),
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                console.log(data);
                throw new Error("Ürün ekleme hatası.");
            }

            const result = await response.json();
            console.log(result);
            return { success: true };
        }

    } catch (error) {
        console.log("Hata Mesajı:", error.message);
        return { error: error.message };
    }
}
