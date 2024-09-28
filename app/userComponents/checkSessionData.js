// "use server"
// import { createClient } from "@/utils/supabase/server";


export const CheckSessionData = async () => {

    const response = await fetch('/api/checkSession');
    const data = await response.json();

    if (response.ok) {
        const { session } = data;
        return session
    }
}

export const LogOutUser = async (one, two) => {

    try {
        const response = await fetch('/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error('Çıkış yapma hatası');
        }
        const data = await response.json();
        console.log(data.message);
    } catch (error) {
        console.error(error.message);
    } finally {
        one(!two);
    }
}

export const AddToCartFunction = async (product) => {

    try {
        const response = await fetch('/api/addToCart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_eposta: 1,
                id: product.id,
                title: product.description,
                price: product.price,
                previous_price: "155",
                img: product.product_img,
                stock: product.stock
            })
        });

        if (!response.ok) {
            throw new Error('hata');
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}


// export const ProductBasket = async () => {
//     const supabase = createClient()

//     let { data: Products_basket, error } = await supabase
//         .from('Products_basket')
//         .select('*')

//     if (error) {
//         console.log(error);
//     }
//     return Products_basket
// }