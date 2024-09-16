"use server"
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"

export async function SignUpForm(formData) {

    const supabase = createClient()
    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
    }
    const { error } = await supabase.auth.signUp(data)

    if (error) {
        redirect('/error')
    } else {
        revalidatePath('/')
        redirect('/')
    }
}






