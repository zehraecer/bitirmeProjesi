import { AdminLoginForm } from "@/actions/AdminLogin"

export const AdminLogin = () => {

    return (
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100  adminLoginDiv">
            <form action={AdminLoginForm} className="d-flex flex-column justify-content-center align-items-center gap-3 my-auto adminLogin">
                <input type="email" name="email" placeholder="e-posta giriniz" />
                <input type="password" name="password" placeholder="şifre giriniz" />
                <button type="submit">Giriş Yap</button>
            </form>
        </div>
    )
}