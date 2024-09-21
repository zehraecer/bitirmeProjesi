// "use server"

// import { NewProduct } from "@/app/adminComponents/NewProduct"
// import { createClient } from "@/utils/supabase/server"

// export async function NewProductForm(formData) {
//     const supabase = createClient()

//     const x = async () => {
//         const { data: dataImg } = await supabase.storage.from('Products_images').upload('file_path', formData.get("file"))
//         return dataImg
//     }

//     const NewP = {

//         description: formData.get("description"),
//         category: formData.get("category"),
//         price: formData.get("price"),
//         discount: formData.get("discount"),
//         stock: formData.get("stock"),
//         color: formData.get("color"),
//         file: x()

//     }

//     const AddProduct = async () => {
//         console.log("LODLDD");

//         const { data, error } = await supabase.from('Products').insert([NewP]).select()
//         return data

//     }
//     return <NewProduct AddProduct={AddProduct} />

// }