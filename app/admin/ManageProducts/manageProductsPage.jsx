import { useRef } from "react";
import { useMyContext } from "@/app/context";
import { NewProduct } from "@/app/adminComponents/NewProduct";
import { createClient } from "@/utils/supabase/client";

export const ManageProductsPage = () => {
    const { Products, Products_category, Products_Color } = useMyContext()
    const supabase = createClient()
    const newProductRef = useRef()

    let c = Products
    const AddProduct = async (e) => {
        e.preventDefault()

        const formData = new FormData(newProductRef.current)
        const formObj = Object.fromEntries(formData.entries());
        const { data: dataImg, error: imgError } = await supabase.storage.from('Products_images').upload(`uploads/${Date.now()}_${formObj.file.name}`, formObj.file);

        if (imgError) {
            console.error("Resim yükleme hatası:", imgError);
            return;
        }
        console.log(formObj);

        const deneme = {
            description: formObj.description,
            category: formObj.category,
            price: formObj.price,
            discount_rate: formObj.discount,
            product_img: dataImg.Key,
            stock: formObj.stock,
            product_color: formObj.color
        }
        const { data, error } = await supabase.from('Products').insert([deneme]).select()
        if (error) {
            console.error("Ürün ekleme hatası:", error);
        } else {
            console.log("Ürün başarıyla eklendi:", data);
        }
    }
    return (
        <>
            <NewProduct newProductRef={newProductRef} AddProduct={AddProduct} />
            {c.map(product => (
                <div key={product.id}>
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