import { supabase } from "@/utils/supabaseClient";
import { MyProvider as Provider } from "./context";

export async function MyProvider({ children }) {
    const { data: Products, error } = await supabase.from('Products').select('*');

    if (error) {
        console.error('Error fetching products:', error);
        return <div>Error fetching adverts</div>;
    }

    return (
        <Provider value={{ Products }}>
            {children}
        </Provider>
    );
}
