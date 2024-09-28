"use server"
import { createClient } from "@/utils/supabase/server";
import { MyProvider as Provider } from "./context";

export async function MyProvider({ children }) {
    const supabase = createClient()
    const { data: Products, error: ProductError } = await supabase.from('Products').select('*');

    if (ProductError) {
        console.log('Error fetching products:', ProductError);
        return <div>Error fetching Products</div>;
    }
    const { data: Products_category, error: Products_categoryError } = await supabase.from('Products_category').select('*')
    if (Products_categoryError) {
        console.log(Products_categoryError);
        return <div>Error fetching Products_category</div>;
    }

    const { data: Products_Color, error: colorError } = await supabase.from('Products_Color').select('*')
    if (colorError) {
        console.log(colorError);
        return <div>Error fetching colorError</div>;
    }
    const { data: Products_basket, error: BasketError } = await supabase.from('Products_basket').select('*')
    if (BasketError) {
        console.log(error);
    }

    return (
        <Provider value={{ Products, Products_category, Products_Color, Products_basket }}>
            {children}
        </Provider>
    );
}
