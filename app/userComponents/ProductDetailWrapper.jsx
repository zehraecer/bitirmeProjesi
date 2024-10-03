'use client';
import React, { useEffect, useState } from 'react';
import { AddToCartFunction, CheckSessionData, ProductBasket } from './checkSessionData';
import { useMyContext } from "../context";
import Image from 'next/image';
// import { AddProduct } from '../adminComponents/zehra';


export const ProductDetailWrapper = ({ clickedProduct }) => {
    const { Products_basket, Products_category, Products_Color } = useMyContext()
    // const [basket, setBasket] = useState(Products_basket)
    const [basketBtn, setBasketBtn] = useState(false)
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
    }, [basketBtn, Products_basket, clickedProduct])

    useEffect(() => {

    }, [clickedProduct, clickedProduct.description])

    // const IncreaseProduct = () => {
    //     setPiece(piece => piece + 1)
    // }

    // const ReduceProduct = () => {
    //     if (piece > 0) {
    //         setPiece(piece => piece - 1)
    //     }
    // }




    return (
        <>
            <div className='d-flex  flex-md-row flex-column justify-content-center align-items-start  product-detail '>
                <div className='p-detail-left zoom-effect'>
                    <Image src={clickedProduct.product_img} alt="resim" />
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