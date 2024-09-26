'use client'; // Burası artık client-side olacak
import React, { useState } from 'react';


export const ProductDetailWrapper = ({ clickedProduct }) => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const AddToCart = async () => {
        console.log("oldu");

        setLoading(true);
        try {
            const response = await fetch('/api/addToCart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: clickedProduct.id,
                    title: clickedProduct.description,
                    price: clickedProduct.price,
                    previous_price: "155",
                    img: clickedProduct.product_img,
                    stock: clickedProduct.stock
                })
            });

            if (!response.ok) {
                throw new Error('hata');
            }

            const data = await response.json();
            setMessage("ürün sepete eklendi");
            console.log(data);

        } catch (error) {
            setMessage(error.message);
        } finally {
            setLoading(false);
        }
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