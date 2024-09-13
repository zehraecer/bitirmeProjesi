export const ProductDetailWrapper = ({ clickedProduct }) => {

    return (

        <>
            <span>{clickedProduct.description}</span>
            <img style={{ width: "100px", height: "100px" }} src={clickedProduct.product_img} />
        </>
    )
}