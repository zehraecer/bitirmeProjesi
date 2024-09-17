import { SignUpForm } from "@/actions/SignUpAction"

export const SignUpPage = () => {

    return (
        <>
            <span>Kayıt Ol</span>
            <form action={SignUpForm}>
                <input type="text" name="name" placeholder="adınızı giriniz" />
                <input type="email" name="email" placeholder="e-posta giriniz" />
                <input type="password" name="password" placeholder="şifre giriniz" />
                <button type="submit">gönder</button>
            </form>
        </>
    )
}