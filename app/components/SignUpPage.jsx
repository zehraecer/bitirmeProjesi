import { SignUpForm } from "@/actions/SignUpAction"

export const SignUpPage = () => {

    return (
        <>
            <span>Kayıt Ol</span>
            <form action={SignUpForm}>
                <input type="email" name="email" id="" />
                <input type="password" name="password" id="" />
                <button type="submit">gönder</button>
            </form>
        </>
    )
}