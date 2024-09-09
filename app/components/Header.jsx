"use client";
import { useMyContext } from "../context";

export const Header = () => {
    const { Products } = useMyContext();

    console.log(Products);

    return (
        <header>
            <h1>Burası Header</h1>
            {Products.map(advert => (
                <div key={advert.id}>
                    <h2>{advert.title}</h2>
                    <p>{advert.description}</p>
                </div>
            ))}
        </header>
    );
};
