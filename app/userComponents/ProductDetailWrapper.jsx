'use client';
import React, { useEffect, useState } from 'react';
import { AddToCartFunction, CheckSessionData, ProductBasket } from './checkSessionData';
import { useMyContext } from "../context";
// import { AddProduct } from '../adminComponents/zehra';


export const ProductDetailWrapper = ({ clickedProduct }) => {
    const { Products_basket } = useMyContext()
    // const [basket, setBasket] = useState(Products_basket)
    const [ahsen, setahsen] = useState(false)
    let piece = 2
    // let y = true

    useEffect(() => {
        const AddToCart = async () => {
            if (ahsen) {
                const isProductTheCart = Products_basket.filter(basket => basket.title === clickedProduct.description)
                const session = await CheckSessionData()
                if (session) {
                    if (isProductTheCart.length < 1) {
                        const name = session.user.user_metadata.name
                        const eposta = session.user.email
                        AddToCartFunction(clickedProduct, name, eposta, piece)
                    } else {
                        console.log("ssepette ürün var");
                    }
                } else {
                    console.log("lütfen giriş yap");
                }
            } else {
                setahsen(false)
            }
        };
        AddToCart()
    }, [ahsen, Products_basket])

    useEffect(() => {

    }, [clickedProduct, clickedProduct.description])

    return (
        <>
            <span>{clickedProduct.description}</span>
            <img style={{ width: "100px", height: "100px" }} src={clickedProduct.product_img} />
            <span>{clickedProduct.price}₺</span>
            <span>{piece}</span>
            <button className="btn" onClick={() => setahsen(true)} >Sepete ekle</button>
        </>
    )
}