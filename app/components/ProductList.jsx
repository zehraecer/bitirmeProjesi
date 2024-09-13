"use client"
import { useMyContext } from "../context"
import Link from "next/link"

export const ProductList = () => {
    const { Products, Products_category } = useMyContext()
    console.log(Products_category);
    return (
        <>
            <h1>burası ürünler sayfası</h1>
            <div className="row">
                {Products.map(product => (
                    <div key={product.id} className="col">
                        <Link href={`/${product.id}`}>
                            <img style={{ width: "150px", height: "150px" }} src={product.product_img} />
                        </Link>
                        <p>{product.description}</p>
                        <span>{Products_category.map((pCategory, index) => {
                            const deneme = pCategory.id == product.category
                            if (deneme) {
                                return <span key={index}>{pCategory.name}</span>
                            }
                        }
                        )}</span>
                    </div>
                ))}
            </div>
        </>
    )

} 