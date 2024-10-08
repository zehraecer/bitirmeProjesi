"use client"
import { useMyContext } from "@/app/context";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function Yuzuk() {
    const { Products, Products_category, Products_Color } = useMyContext()
    const [rings, setRings] = useState(Products)

    useEffect(() => {
        const ring = Products_category.find(category => category.name == "Yüzük")
        const yuzukler = Products.filter(product => product.category === ring.id)
        if (yuzukler) {
            setRings(yuzukler)
        }

    }, [Products, Products_category])
    return (
        <div className="row mt-5 user-products">
            {rings.map(product => (
                <div key={product.id} className="col user-products-col ">
                    <Link className="user-products-link w-100 zoom-img" href={`/${product.id}`}>
                        <Image src={product.product_img} alt="resim" width={250} height={250} />
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
