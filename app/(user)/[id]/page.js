"use client"

import { ProductDetailWrapper } from "@/app/components/ProductDetailWrapper";
import { useMyContext } from "@/app/context";

export default function ProductDetail({ params }) {
    const { id } = params
    const { Products } = useMyContext()
    const clickedProduct = Products.find(product => product.id == id)
    console.log(clickedProduct);


    return (
        <>
            <ProductDetailWrapper clickedProduct={clickedProduct} />

        </>
    )
}