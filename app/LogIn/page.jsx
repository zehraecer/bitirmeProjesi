import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginForm } from "@/actions/LogInAction";


export default function UserLogin() {

    return (
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100  adminLoginDiv">
            <form action={LoginForm} className="d-flex flex-column justify-content-center align-items-center gap-3 my-auto adminLogin">
                <input type="email" name="email" placeholder='E-posta Giriniz' />
                <input type="password" name="password" placeholder='Şifre Giriniz' />
                <button type="submit">Giriş Yap</button>
            </form>
        </div>
    )
}