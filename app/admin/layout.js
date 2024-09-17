import { AdminLogin } from "../adminComponents/adminLogin";

export default function AdminLayout({ children }) {

    return (
        <>
            <div className="d-flex flex-column">
                {children}
                <AdminLogin />
            </div>
        </>
    )
}