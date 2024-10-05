"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckSessionData, DeleteBtn, LogOutUser } from "./checkSessionData";
import { useMyContext } from "../context";
import Image from 'next/image';

export const Header = () => {

    const { Products_basket } = useMyContext()
    const [basketProduct, setBasketProduct] = useState(Products_basket)
    const [isLogin, setIsLogin] = useState(false)
    const [registedUser, setRegistedUser] = useState(null)
    // const [userLogOut, setUserLogOut] = useState(false)
    const [adminEmail, setAdminEmail] = useState(null)

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
        if (registedUser && registedUser.length > 0) {
            let logo = registedUser[0].substring(0, 1)
            return setUserLogo(logo)
        }

    }, [registedUser])

    const HandleLogOut = async () => {
        setIsLogin(!isLogin)
        await LogOutUser(setIsLogin, isLogin)
        setRegistedUser(null);
        setUserLogo("");
    }

    // useEffect(() => {
    //     const notUser = async () => {

    //         const session = await CheckSessionData()
    //         if (session) {
    //             const sessionMail = session.user.email
    //             if (sessionMail === "zehra@gmail.com") {
    //                 setIsLogin(!isLogin)
    //                 await LogOutUser(setIsLogin, isLogin)
    //                 setRegistedUser(null);
    //                 setUserLogo("");
    //             }
    //         }
    //     }
    //     notUser()
    // }, [isLogin, registedUser])

    useEffect(() => {

    }, [isLogin])
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);


    useEffect(() => {
        const zehra = async () => {
            const session = await CheckSessionData()
            if (session) {
                const sessionMail = session.user.email
                const newBasketProduct = basketProduct.filter(product => product.user_eposta === sessionMail)
                setBasketProduct(newBasketProduct)
            } else {
                setBasketProduct([])
                console.log("sepet boş");
            }


        }
        zehra()
    }, [])

    const DeleteProduct = async (id) => {
        try {
            const response = await DeleteBtn(id);
            if (response) {
                setBasketProduct((products) => products.filter(product => product.id !== id));
            }
        } catch (error) {
            console.error("Silme işlemi başarısız:", error);
        }
    };

    useEffect(() => {

    }, [basketProduct])
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center mt-2 headerDiv d-none d-lg-flex'>
                <div className='d-flex justify-content-between align-items-center' >
                    <h1>Parla</h1>
                    <ul className='d-flex gap-3 mb-0'>
                        <Link href="/">Tüm Ürünler</Link>
                        <Link href="/Kolye">Kolye</Link>
                        <Link href="/Bileklik">Bileklik</Link>
                        <Link href="/Kupe">Küpe</Link>
                        <Link href="/Yuzuk">Yüzük</Link>
                    </ul>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    {!isLogin ?
                        <div className="d-flex gap-2">
                            <Link className="logIn" href="LogIn"> Giriş Yap</Link>
                            <Link className="signUp" href="SignUp">Kayıt ol</Link>
                        </div>
                        :
                        <div>
                            <span>hoşgeldiniz {registedUser}
                                <span className="logOut-span" onClick={HandleLogOut}> <Image className="ms-3" src="logout.svg" width={20} height={20} alt="resim" /> </span>
                            </span>
                        </div>
                    }
                </div>
                <div className='d-flex align-items-center gap-3'>
                    {userLogo ? <div className="userLogo">
                        <span >{userLogo}</span>
                    </div> : ""}
                    <button className="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><Image src="basket.svg" alt="resim" width={25} height={25} /></button>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasRightLabel" >Sepetinizdeki Ürünler</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div style={{ padding: "10px" }}>
                                {basketProduct.length > 0 ? basketProduct.map((products, index) => (
                                    <div key={index} className="d-flex flex-column basketOffcanvas">
                                        <div className='d-flex justify-content-between align-items-start gap-2 mt-2 basketOffcanvas-div' >
                                            <div className='d-flex gap-2'>
                                                <Image width={50} height={50} src={products.img} alt="resim" />
                                                <div className='d-flex flex-column basketMiddle'>
                                                    <span> {products.title}</span>
                                                    <p>{products.price}₺</p>
                                                </div>
                                            </div>
                                            <span className="bin" onClick={() => DeleteProduct(products.id)}> <Image src='bin.svg' alt="resim" width={25} height={25} /></span>
                                        </div>
                                    </div>

                                )) : <div>sepet boş</div>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-block d-lg-none mb-4  pb-4'>
                <nav className="navbar bg-body-tertiary fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Parla</a>
                        <div className="d-flex">
                            <div className='d-flex  align-items-center gap-3'>
                                {userLogo ? <div className="userLogo">
                                    <span >{userLogo}</span>
                                </div> : ""}
                                {!isLogin ?
                                    <div className="d-flex gap-2 ">
                                        <Link className="logIn" href="LogIn"> Giriş Yap</Link>
                                        <Link className="signUp" href="SignUp">Kayıt ol</Link>
                                    </div>
                                    :
                                    <div>
                                        <span>hoşgeldiniz {registedUser}
                                            <span className="logOut-span" onClick={HandleLogOut}> <Image className="ms-3 " src="logout.svg" width={20} height={20} alt="resim" /> </span>
                                        </span>
                                    </div>
                                }
                                <button className="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBasket" aria-controls="offcanvasBasket"><Image src="basket.svg" alt="resim" width={25} height={25} /></button>

                                {/* Sepet Offcanvas */}
                                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasBasket" aria-labelledby="offcanvasBasketLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasBasketLabel" >Sepetinizdeki Ürünler</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <div style={{ padding: "10px" }}>
                                            {basketProduct.length > 0 ? basketProduct.map((products, index) => (
                                                <div key={index} className="d-flex flex-column basketOffcanvas">
                                                    <div className='d-flex justify-content-between align-items-start gap-2 mt-2 basketOffcanvas-div' >
                                                        <div className='d-flex gap-2'>
                                                            <Image width={50} height={50} src={products.img} alt="resim" />
                                                            <div className='d-flex flex-column basketMiddle'>
                                                                <span> {products.title}</span>
                                                                <p>{products.price}₺</p>
                                                            </div>
                                                        </div>
                                                        <span className="bin" onClick={() => DeleteProduct(products.id)}> <Image src='bin.svg' alt="resim" width={25} height={25} /></span>
                                                    </div>
                                                </div>

                                            )) : <div>sepet boş

                                            </div>}

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hamburger Menü Offcanvas */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menü</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <Link aria-current="page" className="nav-link" href="/Kolye">Kolye</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" href="/Bileklik">Bileklik</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link aria-current="page" className="nav-link" href="/Kupe">Küpe</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link aria-current="page" className="nav-link" href="/Yuzuk">Yüzük</Link>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>


        </div >
    );
};
