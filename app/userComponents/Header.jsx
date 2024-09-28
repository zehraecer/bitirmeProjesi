"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckSessionData, LogOutUser } from "./checkSessionData";


export const Header = () => {

    const [isLogin, setIsLogin] = useState(false)
    const [registedUser, setRegistedUser] = useState(null)
    // const [userLogOut, setUserLogOut] = useState(false)
    const [adminEmail, setAdminEmail] = useState(null)

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

    console.log(isLogin, registedUser, adminEmail);


    const HandleLogOut = async () => {
        setIsLogin(!isLogin)
        await LogOutUser(setIsLogin, isLogin)
    }

    useEffect(() => {

    }, [isLogin])
    return (
        <div>
            <span>Burası Header</span>
            {!isLogin ? <div>
                <Link href="LogIn"> Giriş Yap</Link>
                <Link href="SignUp">Kayıt ol</Link>
            </div> : <span>hoşgeldiniz {registedUser} <span onClick={HandleLogOut}>çıkış yap</span></span>}
        </div>
    );
};
