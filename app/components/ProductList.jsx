import { useContext } from "react"
import { useMyContext } from "../context"
import Link from "next/link"

export const ProductList = () => {
    const { Products } = useMyContext()

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
                    </div>
                ))}
            </div>
        </>
    )

}