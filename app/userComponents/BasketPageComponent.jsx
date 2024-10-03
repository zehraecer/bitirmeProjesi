"use client"
import { useEffect, useState } from "react"
import { useMyContext } from "../context"
import { CheckSessionData, DeleteBtn } from "./checkSessionData"
import Image from "next/image"
export const BasketPageComponent = () => {
    const { Products_basket } = useMyContext()
    const [basketProduct, setBasketProduct] = useState(Products_basket)

    useEffect(() => {

        const zehra = async () => {
            const session = await CheckSessionData()
            if (session) {
                const sessionMail = session.user.email
                const newBasketProduct = basketProduct.filter(product => product.user_eposta === sessionMail)
                setBasketProduct(newBasketProduct)
            } else {
                setBasketProduct([])
                console.log("sepet boş");
            }
        }
        zehra()
    }, [])

    const DeleteProduct = (id) => {
        DeleteBtn(id)
    }

    return (
        <>
            <>
                <div style={{ padding: "10px" }}>
                    <span>sepet</span>
                    {basketProduct.map((products, index) => (
                        <div key={index} className="d-flex flex-column">
                            <div >
                                <Image style={{ width: "100px", height: "150px" }} src={products.img} alt="resim" />
                                <span>{products.id}---- {products.title} - {products.stock}</span>
                                <button style={{ padding: "8px", backgroundColor: "pink" }} onClick={() => DeleteProduct(products.id)}>sil</button>
                            </div>
                        </div>

                    ))}
                </div>

            </>
        </>
    )
}