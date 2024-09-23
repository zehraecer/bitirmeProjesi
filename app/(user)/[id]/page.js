"use client"
import { ProductDetailWrapper } from "@/app/userComponents/ProductDetailWrapper";
import { notFound } from "next/navigation";
import { useMyContext } from "@/app/context";

export default function ProductDetail({ params }) {
    const { id } = params
    const { Products } = useMyContext()
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