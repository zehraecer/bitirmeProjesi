'use client';
import React, { useEffect, useState } from 'react';
import { AddToCartFunction, CheckSessionData, ProductBasket } from './checkSessionData';
import { useMyContext } from "../context";
// import { AddProduct } from '../adminComponents/zehra';


export const ProductDetailWrapper = ({ clickedProduct }) => {
    const { Products_basket, Products_category, Products_Color } = useMyContext()
    // const [basket, setBasket] = useState(Products_basket)
    const [basketBtn, setBasketBtn] = useState(false)
    const localPiece = localStorage.getItem('piece') || 0;
    const [piece, setPiece] = useState(localPiece)
    // let y = true
    useEffect(() => {
        const AddToCart = async () => {
            if (basketBtn) {
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
                setBasketBtn(!basketBtn)
            }
        };
        AddToCart()
    }, [basketBtn, Products_basket])

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


    return (
        <>
            {/* <span>{clickedProduct.description}</span>
            <img style={{ width: "100px", height: "100px" }} src={clickedProduct.product_img} />
            <span>{clickedProduct.price}₺</span>
            <span>
                <span style={{ padding: "15px", backgroundColor: 'lightcoral', cursor: "pointer" }} onClick={ReduceProduct}>-</span>
                <span style={{ padding: "15px", backgroundColor: 'lightblue' }}>{piece}</span>
                <span style={{ padding: "15px", backgroundColor: 'lightcoral', cursor: "pointer" }} onClick={IncreaseProduct}>+</span>
            </span>
            <button className="btn" onClick={() => setahsen(true)} >Sepete ekle</button> */}

            <div className='d-flex justify-content-center align-items-start  product-detail '>

                <div className='p-detail-left zoom-effect'>
                    <img src={clickedProduct.product_img} alt="" />
                </div>

                <div className='p-detail-right '>
                    <div className='p-detail-one w-100'>
                        <span>{clickedProduct.description}</span>
                        {Products_Color.map((color, index) => {
                            const isColor = color.id == clickedProduct.product_color
                            if (isColor) {
                                return <p key={index}>({color.name})</p>
                            }
                        })}
                    </div>
                    <div className='d-flex gap-10 p-detail-two '>
                        <div className='p-detail-two-span'>
                            <span>₺{clickedProduct.price}</span>
                        </div>
                        <div className='p-detail-two-p'>
                            <p>%{clickedProduct.discount_rate}indirim</p>
                        </div>
                    </div>

                    <div className='addBasketBtn'>
                        <span onClick={() => setBasketBtn(true)}  >Sepete Ekle</span>
                    </div>
                </div>

            </div>
        </>
    )
}