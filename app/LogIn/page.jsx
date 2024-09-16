import { LoginForm } from "@/actions/LogInAction";


export default function UserLogin() {

    return (
        <>
            <span>Giriş Yap</span>
            <form action={LoginForm}>
                <input type="email" name="email" id="" />
                <input type="password" name="password" id="" />
                <button type="submit">gönder</button>
            </form>
        </>
    )
}