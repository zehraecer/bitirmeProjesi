import { useMyContext } from "@/app/context";
import { NewProduct } from "@/app/adminComponents/NewProduct";
import { createClient } from "@/utils/supabase/client";

export const ManageProductsPage = () => {
    const { Products, Products_category, Products_Color } = useMyContext()
    const supabase = createClient()

    const AddProduct = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const formObj = Object.fromEntries(formData.entries());
        const { data: dataImg, error: imgError } = await supabase.storage.from('Products_images').upload(`uploads/${Date.now()}_${formObj.file.name}`, formObj.file);
        const filePath = dataImg.path;
        const { data: publicUrlData } = supabase.storage.from('Products_images').getPublicUrl(filePath);
        const imageUrl = publicUrlData.publicUrl;

        if (imgError) {
            console.error("Resim yükleme hatası", imgError);
            return;
        }

        const newProductDetail = {
            description: formObj.description,
            category: formObj.category,
            price: formObj.price,
            discount_rate: formObj.discount,
            product_img: imageUrl,
            stock: formObj.stock,
            product_color: formObj.color
        }

        const { data, error } = await supabase.from('Products').insert([newProductDetail]).select()

        if (error) {
            console.error("error", error);
        } else {
            console.log(data);
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