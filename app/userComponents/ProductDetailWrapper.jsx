import { useMyContext } from "../context";

export const ProductDetailWrapper = ({ clickedProduct }) => {
    const { Products } = useMyContext()

    const AddToCart = (element) => {
        console.log(element);
        const clickedProduct = Products.find(product => product.id === element)
        console.log(clickedProduct);
    }

    return (
        <>
            <span>{clickedProduct.description}</span>
            <img style={{ width: "100px", height: "100px" }} src={clickedProduct.product_img} />
            <span>{clickedProduct.price}₺</span>

            <button onClick={() => AddToCart(clickedProduct.id)}>Sepete ekle</button>
        </>
    )
}