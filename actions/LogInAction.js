"use server"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export async function LoginForm(formData) {
    const supabase = createClient()

    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
    }
    const { error } = await supabase.auth.signInWithPassword(data)

    console.log(data);
    if (error) {
        console.log(error);
        redirect('/error')
    } else {
        redirect('/')
    }
}