"use client"

import { useEffect } from "react";
import { NewProductForm } from "../admin/NewProductAction";
import { useMyContext } from "../context";

export const NewProduct = ({ Products }) => {
    const { Products_category, Products_Color } = useMyContext()
    useEffect(() => {
        NewProductForm()
    }, [Products])

    return (
        <>
            <form action={NewProductForm} >

                <div className="d-flex  justify-content-center align-items-center">

                    <div className="d-flex flex-column">
                        <div className="d-flex">
                            <label htmlFor="description">Tanım </label>
                            <input type="text" name="description" placeholder="tanım giriniz" />
                        </div>
                        <div className="d-flex">
                            <label htmlFor="price">Fiyat </label>
                            <input type="number" name="price" placeholder="fiyat giriniz" />
                        </div>
                        <div className="d-flex">
                            <label htmlFor="discount">İndirim </label>
                            <input type="number" placeholder="indirim oranı" name="discount" />
                        </div>
                        <div className="d-flex">
                            <label htmlFor="stock">Stock </label>
                            <input type="number" placeholder="stok giriniz" name="stock" />
                        </div>
                    </div>

                    <div className="d-flex flex-column ">
                        <select name="category" placeholder>
                            <option disabled value="kategori seçiniz">kategori seçiniz</option>
                            {
                                Products_category.map(category => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))
                            }
                        </select>
                        <select name="color">
                            <option disabled value="renk seçiniz">renk seçiniz</option>
                            {Products_Color.map(color => (
                                <option key={color.id} value={color.id}>{color.name}</option>
                            ))}
                        </select>
                        <label for="myfile">resim ekleyiniz</label>
                        <input type="file" name="file" /><br />
                        <button type="submit" >ürün ekle</button>
                    </div>
                </div>

            </form>
        </>
    )
}