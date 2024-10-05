import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5 p-4 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Hakkımızda</h5>
                        <p>
                            Bu proje, modern web geliştirme yöntemlerini kullanarak oluşturulmuş
                            bir bitirme projesidir.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Bağlantılar</h5>
                        <ul className="list-unstyled">
                            <li><Link href="/" className="text-white">Anasayfa</Link></li>

                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>İletişim</h5>
                        <p>İstanbul, Türkiye</p>
                        <p>Email: zehra@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="bg-secondary text-center py-3">
                <p>© 2024 Tüm Hakları Saklıdır | Parla Takı</p>
            </div>
        </footer>
    );
};


