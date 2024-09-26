"use client"

import { useMyContext } from "../context";

export const NewProduct = ({ AddProduct }) => {
    const { Products_category, Products_Color } = useMyContext()

    return (
        <>
            <form onSubmit={AddProduct} >
                <input type="text" name="description" placeholder="tanım giriniz" />
                <select name="category" placeholder>
                    <option disabled value="kategori seçiniz">kategori seçiniz</option>
                    {
                        Products_category.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))
                    }
                </select>
                <input type="number" name="price" placeholder="fiyat giriniz" />
                <input type="number" placeholder="indirim oranı" name="discount" />
                <input type="number" placeholder="stok giriniz" name="stock" />
                <select name="color">
                    <option disabled value="renk seçiniz">renk seçiniz</option>
                    {Products_Color.map(color => (
                        <option key={color.id} value={color.id}>{color.name}</option>
                    ))}
                </select>
                <label for="myfile">resim ekleyiniz</label>
                <input type="file" name="file" /><br />
                <button type="submit" >ürün ekle</button>
            </form>
        </>
    )
}