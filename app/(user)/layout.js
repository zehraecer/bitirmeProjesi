import 'bootstrap/dist/css/bootstrap.min.css';

import { Children, cloneElement } from "react";
import { Header } from "../components/Header";
import { MyProvider } from "../MyProvider";

export default async function UserLayout({ children }) {

    return (
        <MyProvider>
            <div className="d-flex flex-column">
                <Header />
                {children}
            </div>
        </MyProvider>
    )
}