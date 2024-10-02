"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckSessionData, DeleteBtn, LogOutUser } from "./checkSessionData";
import { useMyContext } from "../context";
import { Basket } from "./Basket";


export const Header = () => {


    const { Products_basket } = useMyContext()
    const [isLogin, setIsLogin] = useState(false)
    const [registedUser, setRegistedUser] = useState(null)
    // const [userLogOut, setUserLogOut] = useState(false)
    const [adminEmail, setAdminEmail] = useState(null)
    const [deneme, setdeneme] = useState(Products_basket)
    const [userLogo, setUserLogo] = useState("")

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

    }, [deneme])
    console.log(registedUser);

    useEffect(() => {
        if (registedUser && registedUser.length > 0) {
            let logo = registedUser[0].substring(0, 1)
            return setUserLogo(logo)
        }

    }, [registedUser])

    const HandleLogOut = async () => {
        setIsLogin(!isLogin)
        await LogOutUser(setIsLogin, isLogin)
    }

    useEffect(() => {

    }, [isLogin])
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    return (
        <div>
            {/* <span>Parla Collection</span>
            {!isLogin ? <div>
                <Link href="LogIn"> Giriş Yap</Link>
                <Link href="SignUp">Kayıt ol</Link>
            </div> : <span>hoşgeldiniz {registedUser} <span onClick={HandleLogOut}>çıkış yap</span></span>}
            <Basket /> */}

            <div className='d-flex justify-content-between align-items-center mt-2'>
                <div className='d-flex justify-content-between align-items-center' >
                    <h1>Parla</h1>
                    <ul className='d-flex gap-3'>
                        <Link href="/">Tüm Ürünler</Link>
                        <Link href="/Kolye">Kolye</Link>
                        <Link href="/Bileklik">Bileklik</Link>
                        <Link href="/Kupe">Küpe</Link>
                        <Link href="/Yuzuk">Yüzük</Link>
                    </ul>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    {!isLogin ?
                        <div>
                            <Link href="LogIn"> Giriş Yap</Link>
                            <Link href="SignUp">Kayıt ol</Link>
                        </div>
                        :
                        <span>hoşgeldiniz {registedUser} <span onClick={HandleLogOut}>çıkış yap</span></span>}
                </div>
                <div className='d-flex gap-3'>
                    <span>{userLogo}</span>
                    <span>sepet</span>
                </div>
            </div>

            <div className='d-block d-lg-none'>
                <nav class="navbar bg-body-tertiary fixed-top">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Parla</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Link</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li>
                                                <hr class="dropdown-divider" />
                                            </li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form class="d-flex mt-3" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    );
};
