"use client"
import { useMyContext } from "@/app/context";

import { NewProduct } from "@/app/adminComponents/NewProduct";
import { useEffect } from "react";
import Image from "next/image";

export const ManageProductsPage = () => {
    const { Products, Products_category, Products_Color } = useMyContext()

    useEffect(() => {

    }, [Products])
    return (
        <div className="px-5  mt-2">
            <NewProduct Products={Products} />

            <div className="row mt-5 align-items-center gap-5">
                {Products.map(product => (
                    <div key={product.id} className="d-flex  justify-content-center gap-3 align-items-center col  manageProducts">
                        <div className="manageProducts-img ">
                            <Image className="" src={product.product_img} alt="resim" width={250} height={250} />
                        </div>
                        <div >
                            <span className="manageProductsSpan-one">{product.description.toLowerCase()}</span>
                            <div className="d-flex flex-column">
                                <span className="manageProductsSpan-one">{product.price}₺</span>

                                {Products_category.map((pCategory, index) => {
                                    const isCategory = pCategory.id == product.category
                                    if (isCategory) {
                                        return <span className="manageProductsSpan-one" key={index}>Kategori:  {pCategory.name}</span>
                                    }
                                }
                                )}
                                <span className="manageProductsSpan-one">Stock: {product.stock} </span>
                                <span className="manageProductsSpan-one">İndirim: {product.discount_rate}</span>
                                {Products_Color.map((color, index) => {
                                    const isColor = color.id == product.product_color
                                    if (isColor) {
                                        return <span key={index} className="manageProductsSpan-one">Renk: {color.name}</span>
                                    }
                                })}
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}