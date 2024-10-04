import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "../userComponents/Header";

export default function UserLayout({ children }) {
    return (
        <main>
            <div className="d-flex flex-column w-100 ">
                <div className="padding-i">
                    <Header />
                </div>
                <div className="bakalim"></div>
                <main className="padding-i">
                    {children}
                </main>
            </div>
        </main>
    )
}