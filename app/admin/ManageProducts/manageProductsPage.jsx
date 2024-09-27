// "use client"
import { useMyContext } from "@/app/context";

import { NewProduct } from "@/app/adminComponents/NewProduct";

export const ManageProductsPage = () => {
    const { Products, Products_category, Products_Color } = useMyContext()
    return (
        <>
            <NewProduct />
            {Products.map(product => (
                <div key={product.id}>
                    <img style={{ width: "50px", height: "50px" }} src={product.product_img} />
                    <span>{product.description}-----</span>
                    <span>{product.price}₺-----</span>
                    {Products_category.map((pCategory, index) => {
                        const isCategory = pCategory.id == product.category
                        if (isCategory) {
                            return <span style={{ color: "red" }} key={index}>{pCategory.name}-----</span>
                        }
                    }
                    )}
                    <span>{product.stock} -----</span>
                    {Products_Color.map((color, index) => {
                        const isColor = color.id == product.product_color
                        if (isColor) {
                            return <span key={index} style={{ color: "blue" }}>{color.name}-----</span>
                        }
                    })}
                </div>
            ))}
        </>
    )
}