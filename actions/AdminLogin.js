export async function AdminLoginForm(formData) {

    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
    }
    const { error } = await supabase.auth.signUp(data)
    if (data.email === "zehra@gmail.com" && data.password === "123456") {

    }

}