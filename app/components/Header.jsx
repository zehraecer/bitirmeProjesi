"use client";

import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
    const [isLogin, setIsLogin] = useState(false)
    const supabase = createClient()

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                setIsLogin(true);
            }
        };
        checkSession();
    }, []);

    return (
        <div>
            <span>Burası Header</span>
            {!isLogin ? <div>
                <Link href="LogIn"> Giriş Yap</Link>
                <Link href="SignUp">Kayıt ol</Link>
            </div> : <span>hoşgeldiniz</span>}
        </div>
    );
};
