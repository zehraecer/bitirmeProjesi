"use client"

import { useEffect } from "react";
import { NewProductForm } from "../admin/NewProductAction";
import { useMyContext } from "../context";

export const NewProduct = ({ Products }) => {
    const { Products_category, Products_Color } = useMyContext()
    useEffect(() => {
        NewProductForm()
    }, [Products])
    console.log(Products);


    return (
        <>
            <form action={NewProductForm} className="newProductFormWrapper" >

                <div className=" d-flex flex-md-row flex-column justify-content-center  align-items-md-start align-items-center gap-5 w-100">
                    <div className="newProductForm ">
                        <div className="d-flex flex-md-row flex-column gap-2">
                            <label htmlFor="description">Tanım </label>
                            <input type="text" name="description" placeholder="tanım giriniz" />
                        </div>
                        <div className="d-flex flex-md-row flex-column gap-2 ">
                            <label htmlFor="price">Fiyat </label>
                            <input type="number" name="price" placeholder="fiyat giriniz" />
                        </div>
                        <div className="d-flex flex-md-row flex-column gap-2">
                            <label htmlFor="discount">İndirim </label>
                            <input type="number" placeholder="indirim oranı" name="discount" />
                        </div>
                        <div className="d-flex flex-md-row flex-column gap-2">
                            <label htmlFor="stock">Stock </label>
                            <input type="number" placeholder="stok giriniz" name="stock" />
                        </div>
                    </div>

                    <div className="newProductForm-two">
                        <select name="category" className="newProductFormSelect">
                            <option disabled value="kategori seçiniz">kategori seçiniz</option>
                            {
                                Products_category.map(category => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))
                            }
                        </select>
                        <select name="color" className="newProductFormSelect-Two">
                            <option disabled value="">renk seçiniz</option>
                            {Products_Color.map(color => (
                                <option key={color.id} value={color.id}>{color.name}</option>
                            ))}
                        </select>
                        <div className="newProductFormFile">
                            <label for="myfile">Resim Ekleyiniz</label>
                            <input type="file" name="file" /><br />
                        </div>
                        <button type="submit" className="w-100" >Ürün Ekle</button>
                    </div>
                </div>

            </form>
        </>
    )
}