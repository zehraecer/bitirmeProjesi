'use client';
import React, { useEffect, useState } from 'react';
import { AddToCartFunction, CheckSessionData, ProductBasket } from './checkSessionData';
import { useMyContext } from "../context";
import Image from 'next/image';
// import { AddProduct } from '../adminComponents/zehra';


export const ProductDetailWrapper = ({ clickedProduct }) => {
    const { Products_basket, Products_Color } = useMyContext()
    const [basketBtn, setBasketBtn] = useState(false)

    useEffect(() => {
        const AddToCart = async () => {
            if (basketBtn) {
                const session = await CheckSessionData();
                const eposta = session.user.email;
                const isTherUser = Products_basket.filter(pro => pro.user_eposta === eposta)
                const isThereProduct = isTherUser.filter(product => product.title == clickedProduct.description)
                if (session) {
                    if (isThereProduct.length < 1) {
                        const name = session.user.user_metadata.name;
                        const eposta = session.user.email;
                        await AddToCartFunction(clickedProduct, name, eposta);
                    } else {
                        console.log("ssepette ürün var");

                    }
                } else {
                    console.log("lütfen giriş yap");
                }
                setBasketBtn(false);
            }
        };
        AddToCart();
    }, [basketBtn, Products_basket, clickedProduct]);

    return (
        <>
            <div className='d-flex flex-md-row flex-column justify-content-center align-items-center align-items-md-center product-detail pt-4'>
                <div className=' p-detail-left zoom-effect'>
                    <Image
                        className="d-none d-sm-block"
                        src={clickedProduct.product_img}
                        alt="resim"
                        width={500}
                        height={430}
                    />

                    <Image
                        className="d-sm-none"
                        src={clickedProduct.product_img}
                        alt="resim"
                        width={250}
                        height={150}
                    />
                </div>

                <div className=' p-detail-right '>
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