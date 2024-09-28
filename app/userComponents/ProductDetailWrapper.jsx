'use client';
import React, { useState } from 'react';
import { AddToCartFunction, ProductBasket } from './checkSessionData';
import { useMyContext } from "../context";


export const ProductDetailWrapper = ({ clickedProduct }) => {
    const [loading, setLoading] = useState(false);
    const { Products_basket } = useMyContext()
    // const [message, setMessage] = useState("");

    console.log(Products_basket);
    const AddToCart = async () => {
        setLoading(true);
        AddToCartFunction(clickedProduct)
    };



    return (
        <>
            <span>{clickedProduct.description}</span>
            <img style={{ width: "100px", height: "100px" }} src={clickedProduct.product_img} />
            <span>{clickedProduct.price}₺</span>
            <button className="btn" onClick={() => AddToCart(clickedProduct.id)} >Sepete ekle</button>
        </>
    )
}