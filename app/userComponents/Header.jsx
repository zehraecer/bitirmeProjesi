"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckSessionData, DeleteBtn, LogOutUser } from "./checkSessionData";
import { useMyContext } from "../context";


export const Header = () => {
    const { Products_basket } = useMyContext()
    const [isLogin, setIsLogin] = useState(false)
    const [registedUser, setRegistedUser] = useState(null)
    // const [userLogOut, setUserLogOut] = useState(false)
    const [adminEmail, setAdminEmail] = useState(null)
    const [deneme, setdeneme] = useState(Products_basket)


    useEffect(() => {
        const checkSession = async () => {
            const session = await CheckSessionData()
            if (session) {
                setRegistedUser(session.user.user_metadata.name);
                setAdminEmail(session.user.email);
                setIsLogin(true);
            }

        };
        checkSession();
    }, []);

    useEffect(() => {

        const zehra = async () => {
            const session = await CheckSessionData()
            if (session) {
                const y = session.user.email
                const x = deneme.filter(d => d.user_eposta === y)
                setdeneme(x)
            } else {
                setdeneme([])
                console.log("sepet boş");
            }
        }
        zehra()
    }, [])

    useEffect(() => {

    }, [deneme])

    const HandleLogOut = async () => {
        setIsLogin(!isLogin)
        await LogOutUser(setIsLogin, isLogin)
    }

    useEffect(() => {

    }, [isLogin])


    const DeleteProduct = (id) => {
        DeleteBtn(id)
    }
    return (
        <div>
            <span>Burası Header</span>
            {!isLogin ? <div>
                <Link href="LogIn"> Giriş Yap</Link>
                <Link href="SignUp">Kayıt ol</Link>
            </div> : <span>hoşgeldiniz {registedUser} <span onClick={HandleLogOut}>çıkış yap</span></span>}

            <div style={{ padding: "10px", backgroundColor: "lightgreen" }}>
                <span>sepet</span>
                {deneme.map((products, index) => (
                    <div key={index} className="d-flex flex-column">
                        <div>
                            <span>{products.id}---- {products.title}</span>
                            <button style={{ padding: "8px", backgroundColor: "pink" }} onClick={() => DeleteProduct(products.id)}>sil</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};
