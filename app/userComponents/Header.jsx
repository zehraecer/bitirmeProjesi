"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckSessionData, DeleteBtn, LogOutUser } from "./checkSessionData";
import { useMyContext } from "../context";
import { Basket } from "./Basket";
import { StockChange } from '@/actions/StockAction';


export const Header = () => {


    const { Products_basket } = useMyContext()
    const [basketProduct, setBasketProduct] = useState(Products_basket)
    const [isLogin, setIsLogin] = useState(false)
    const [registedUser, setRegistedUser] = useState(null)
    // const [userLogOut, setUserLogOut] = useState(false)
    const [adminEmail, setAdminEmail] = useState(null)
    const [deneme, setdeneme] = useState(Products_basket)
    const [userLogo, setUserLogo] = useState("")
    const [newStock, setNewStock] = useState("")

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

    const DeleteProduct = (id) => {
        DeleteBtn(id)
    }


    return (
        <div>
            <div className='d-flex justify-content-between align-items-center mt-2 headerDiv'>
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
                        <div>
                            <span>hoşgeldiniz {registedUser}
                                <span onClick={HandleLogOut}>çıkış yap</span>
                            </span>
                        </div>
                    }
                </div>
                <div className='d-flex gap-3'>
                    <span>{userLogo}</span>
                    <button className="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src="basket.svg" /></button>

                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasRightLabel" >Sepetinizdeki Ürünler</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div style={{ padding: "10px" }}>
                                {basketProduct.map((products, index) => (
                                    <div key={index} className="d-flex flex-column basketOffcanvas">
                                        <div className='d-flex justify-content-between align-items-start gap-2 mt-2 basketOffcanvas-div' >
                                            <div className='d-flex gap-2'>
                                                <img style={{ width: "50px", height: "50px" }} src={products.img} alt="" />
                                                <div className='d-flex flex-column basketMiddle'>
                                                    <span> {products.title}</span>
                                                    <p>{products.price}₺</p>
                                                </div>
                                            </div>
                                            <span onClick={() => DeleteProduct(products.id)}> <img src='bin.svg' /></span>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-block d-lg-none'>
                <nav className="navbar bg-body-tertiary fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Parla</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex mt-3" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </div >
    );
};
