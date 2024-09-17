import { AdminLoginForm } from "@/actions/AdminLogin"

export const AdminLogin = () => {

    return (

        <>
            <form action={AdminLoginForm}>
                <input type="email" name="email" placeholder="e-posta giriniz" />
                <input type="password" name="password" placeholder="şifre giriniz" />
                <button type="submit">Giriş Yap</button>
            </form>
        </>
    )
}