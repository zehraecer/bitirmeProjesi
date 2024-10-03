import { useEffect, useState } from "react"
import { useMyContext } from "../context"
import { CheckSessionData, DeleteBtn } from "./checkSessionData"
import Link from "next/link"

export const Basket = () => {
    const { Products_basket } = useMyContext()
    const [basketProduct, setBasketProduct] = useState(Products_basket)

    useEffect(() => {

        const zehra = async () => {
            const session = await CheckSessionData()
            if (session) {
                const y = session.user.email
                const x = basketProduct.filter(product => product.user_eposta === y)
                setBasketProduct(x)
            } else {
                setBasketProduct([])
                console.log("sepet boş");
            }
        }
        zehra()
    }, [basketProduct])

    const DeleteProduct = (id) => {
        DeleteBtn(id)
    }
    return (

        <>
            <div style={{ padding: "10px", backgroundColor: "lightgreen" }}>
                <span>sepet</span>
                {basketProduct.map((products, index) => (
                    <div key={index} className="d-flex flex-column">
                        <div>
                            <span>{products.id}---- {products.title}---{products.stock}</span>
                            <button style={{ padding: "8px", backgroundColor: "pink" }} onClick={() => DeleteProduct(products.id)}>sil</button>
                        </div>
                    </div>

                ))}
                <Link href="/basket">sepete git</Link>
            </div>

        </>
    )
}