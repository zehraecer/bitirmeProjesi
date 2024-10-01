'use client';
import React, { useEffect, useState } from 'react';
import { AddToCartFunction, CheckSessionData, ProductBasket } from './checkSessionData';
import { useMyContext } from "../context";
// import { AddProduct } from '../adminComponents/zehra';


export const ProductDetailWrapper = ({ clickedProduct }) => {
    const { Products_basket } = useMyContext()
    // const [basket, setBasket] = useState(Products_basket)
    const [ahsen, setahsen] = useState(false)
    const localPiece = localStorage.getItem('piece') || 0;
    const [piece, setPiece] = useState(localPiece)

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
                        const piece = localStorage.getItem('piece') || 0;
                        localStorage.setItem('piece', piece);
                        AddToCartFunction(clickedProduct, name, eposta)
                    } else {
                        console.log("ssepette ürün var");
                    }
                } else {
                    console.log("lütfen giriş yap");
                }
            } else {
                setahsen(!ahsen)
            }
        };
        AddToCart()
    }, [ahsen, Products_basket])

    useEffect(() => {

    }, [clickedProduct, clickedProduct.description])

    const IncreaseProduct = () => {
        setPiece(piece => piece + 1)
    }

    const ReduceProduct = () => {
        if (piece > 0) {
            setPiece(piece => piece - 1)
        }
    }

    useEffect(() => {

    }, [piece])

    console.log(piece);

    return (
        <>
            <span>{clickedProduct.description}</span>
            <img style={{ width: "100px", height: "100px" }} src={clickedProduct.product_img} />
            <span>{clickedProduct.price}₺</span>
            <span>
                <span style={{ padding: "15px", backgroundColor: 'lightcoral', cursor: "pointer" }} onClick={ReduceProduct}>-</span>
                <span style={{ padding: "15px", backgroundColor: 'lightblue' }}>{piece}</span>
                <span style={{ padding: "15px", backgroundColor: 'lightcoral', cursor: "pointer" }} onClick={IncreaseProduct}>+</span>
            </span>
            <button className="btn" onClick={() => setahsen(true)} >Sepete ekle</button>
        </>
    )
}