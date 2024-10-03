"use client"
import { useMyContext } from "@/app/context"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Bileklik() {
    const { Products, Products_category, Products_Color } = useMyContext()
    const [bracelets, setBracelet] = useState(Products)

    useEffect(() => {
        const bracelet = Products_category.find(category => category.name == "Bileklik")
        console.log(bracelet.id);

        const bilekliker = Products.filter(product => product.category === bracelet.id)
        if (bilekliker) {
            setBracelet(bilekliker)
        }

    }, [Products, Products_category])

    return (
        <div className="row mt-5 user-products">
            {bracelets.map(product => (
                <div key={product.id} className="col user-products-col ">
                    <Link className="user-products-link w-100 zoom-img" href={`/${product.id}`}>
                        <Image src={product.product_img} alt="resim" />
                    </Link>
                    <div className="user-product-one w-100">
                        {Products_category.map((pCategory, index) => {
                            const isCategory = pCategory.id == product.category
                            if (isCategory) {
                                return <p style={{ color: "red" }} key={index}>{pCategory.name}</p>
                            }
                        }
                        )}
                        <span className="deneme" >{product.description.toLowerCase()}</span>
                    </div>

                    <div className="user-product-two w-100">
                        <span>{product.price}₺</span>
                        {Products_Color.map((color, index) => {
                            const isColor = color.id == product.product_color
                            if (isColor) {
                                return <p key={index}>{color.name}</p>
                            }
                        })}
                    </div>
                    <div className="discountDiv">
                        <span className="discountSpan"> %{product.discount_rate} indirim</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
