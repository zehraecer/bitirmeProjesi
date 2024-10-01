import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "../userComponents/Header";

export default function UserLayout({ children }) {
    return (
        <main>
            <div className="d-flex flex-column w-100 padding-i">
                <Header />
                <main>
                    {children}
                </main>
            </div>
        </main>
    )
}