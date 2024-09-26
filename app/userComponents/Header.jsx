"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [registedUser, setRegistedUser] = useState(null)
    // const [userLogOut, setUserLogOut] = useState(false)
    const [adminEmail, setAdminEmail] = useState(null)

    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await fetch('/api/checkSession');
                const data = await response.json();

                if (response.ok) {
                    const { session } = data;
                    console.log(session);
                    setRegistedUser(session.user.user_metadata.name);
                    setAdminEmail(session.user.email);
                    setIsLogin(true);
                } else {
                    console.error(data.error);
                }
            } catch (error) {
                console.error("Oturum kontrol hatası: ", error);
            }
        };

        checkSession();
    }, []);

    const HandleLogOut = async () => {
        setIsLogin(!isLogin)
        try {
            const response = await fetch('/api/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Çıkış yapma hatası');
            }
            const data = await response.json();
            console.log(data.message);
        } catch (error) {
            console.error(error.message);
        } finally {
            setIsLogin(!isLogin);
        }
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
