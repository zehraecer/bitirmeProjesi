"use client";

import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [registedUser, setRegistedUser] = useState(null)
    const [userLogOut, setUserLogOut] = useState(false)
    const [adminEmail, setAdminEmail] = useState(null)
    const supabase = createClient()

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                setRegistedUser(session.user.user_metadata.name)
                setAdminEmail(session.user.email)
                setIsLogin(true);
            }
        };
        checkSession();
    }, []);


    // if (registedUser) {
    //     console.log(registedUser);
    //     console.log(registedUser);  //ilkte undefined olarak geldği için sorgu gerekti
    // }
    useEffect(() => {
        const OutAdmin = async () => {

            if (adminEmail === "zehra@gmail.com") {
                const { error } = await supabase.auth.signOut();
                if (!error) {
                    setIsLogin(false);
                }
            }
        }
        const logOut = async () => {
            if (userLogOut) {
                const { error } = await supabase.auth.signOut();
                if (!error) {
                    console.log("çıkış yapıldı");
                    setIsLogin(false);
                    // setUserLogOut(false);
                }
            }
        }
        logOut()
        OutAdmin()
    }, [userLogOut, adminEmail])

    return (
        <div>
            <span>Burası Header</span>
            {!isLogin ? <div>
                <Link href="LogIn"> Giriş Yap</Link>
                <Link href="SignUp">Kayıt ol</Link>
            </div> : <span>hoşgeldiniz {registedUser} <span onClick={() => setUserLogOut(true)}>çıkış yap</span></span>}
        </div>
    );
};
