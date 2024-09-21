import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from "../userComponents/Header";

export default async function UserLayout({ children }) {

    return (
        <>
            <div className="d-flex flex-column">
                <Header />
                {children}
            </div>
        </>
    )
}