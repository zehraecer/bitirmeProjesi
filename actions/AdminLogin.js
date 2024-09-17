"use server"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export async function AdminLoginForm(formData) {
    const supabase = createClient()

    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
    }
    const { error } = await supabase.auth.signInWithPassword(data)
    if (data.email === "zehra@gmail.com" && data.password === "123456") {
        redirect("admin/ManageProducts")
    } else {
        redirect("admin/error")
    }

}