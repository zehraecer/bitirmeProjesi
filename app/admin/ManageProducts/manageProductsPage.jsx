import { useMyContext } from "@/app/context";
import { NewProduct } from "@/app/adminComponents/NewProduct";
import { useEffect } from "react";

export const ManageProductsPage = () => {
    const { Products, Products_category, Products_Color } = useMyContext()

    useEffect(() => {

    }, [Products])

    const AddProduct = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formObj = Object.fromEntries(formData.entries());

        try {

            const photoResponse = await fetch('/api/getPhoto', {
                method: 'POST',
                body: formData,
            });

            if (!photoResponse.ok) {
                const photoData = await photoResponse.json();
                console.error(photoData);
                throw new Error("resim yükleme hatsı ");
            }

            const { imageUrl } = await photoResponse.json();
            const response = await fetch('/api/adminAddProduct', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    description: formObj.description,
                    category: formObj.category,
                    price: formObj.price,
                    discount_rate: formObj.discount,
                    product_img: imageUrl,
                    stock: formObj.stock,
                    product_color: formObj.color
                })
            });

            if (!response.ok) {
                const data = await response.json();
                console.log(data);
                throw new Error('hata');

            }


        } catch (error) {
            console.log(error.message);

        }

    }

    return (
        <>
            <NewProduct AddProduct={AddProduct} />
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