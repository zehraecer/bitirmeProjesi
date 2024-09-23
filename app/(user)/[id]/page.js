"use server"

import { ProductDetailWrapper } from "@/app/userComponents/ProductDetailWrapper";
// import { useMyContext } from "@/app/context";
import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function ProductDetail({ params }) {
    const { id } = params
    const supabase = createClient()
    const { data: Products, error: ProductError } = await supabase.from('Products').select('*');
    const clickedProduct = Products.find(product => product.id == id)
    if (clickedProduct) {
        return (
            <>
                <ProductDetailWrapper clickedProduct={clickedProduct} />
            </>
        )
    }
    else {
        return notFound()
    }

}