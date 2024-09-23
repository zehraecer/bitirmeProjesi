"use client"
import { useMyContext } from "../context"
import Link from "next/link"

export const ProductList = () => {
    const { Products, Products_category, Products_Color } = useMyContext()
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
                        <p><span>{product.price}₺</span></p>
                        {Products_category.map((pCategory, index) => {
                            const isCategory = pCategory.id == product.category
                            if (isCategory) {
                                return <span style={{ color: "red" }} key={index}>{pCategory.name}</span>
                            }
                        }
                        )}
                        {Products_Color.map((color, index) => {
                            const isColor = color.id == product.product_color
                            if (isColor) {
                                return <span key={index} style={{ color: "blue" }}>{color.name}</span>
                            }
                        })}
                    </div>
                ))}
            </div>
        </>
    )

} 