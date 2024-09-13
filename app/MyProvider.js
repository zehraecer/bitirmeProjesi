import { supabase } from "@/utils/supabaseClient";
import { MyProvider as Provider } from "./context";

export async function MyProvider({ children }) {
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


    return (
        <Provider value={{ Products, Products_category }}>
            {children}
        </Provider>
    );
}
