"use client";
import { useMyContext } from "../context";

export const Header = () => {
    const { Products } = useMyContext();

    console.log(Products);

    return (
        <div>
            <h1>Burası Header</h1>
        </div>
    );
};
