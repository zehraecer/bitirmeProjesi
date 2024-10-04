import 'bootstrap/dist/css/bootstrap.min.css';

import { SignUpForm } from "@/actions/SignUpAction"

export const SignUpPage = () => {

    return (
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100  adminLoginDiv">
            <form action={SignUpForm} className="d-flex flex-column justify-content-center align-items-center gap-3 my-auto adminLogin">
                <input type="text" name="name" placeholder="adınızı giriniz" />
                <input type="email" name="email" placeholder="e-posta giriniz" />
                <input type="password" name="password" placeholder="şifre giriniz" />
                <button type="submit">Kayıt Ol</button>
            </form>
        </div>
    )
}