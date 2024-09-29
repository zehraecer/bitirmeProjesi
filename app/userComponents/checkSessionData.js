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

export const AddToCartFunction = async (product, name, eposta, piece) => {

    try {
        const response = await fetch('/api/addToCart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_name: name,
                user_eposta: eposta,
                title: product.description,
                price: product.price * piece,
                previous_price: product.price,
                img: product.product_img,
                stock: piece
            })
        });

        if (!response.ok) {
            throw new Error('hata');
        }

        const data = await response.json();

    } catch (error) {
        console.log(error);
    }
}


export const DeleteBtn = async (id) => {
    try {
        const response = await fetch('/api/deleteProduct', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        });

        if (!response.ok) {
            throw new Error('Ürün silinirken bir hata oluştu.');
        }

        const data = await response.json();
        console.log('Ürün başarıyla silindi:', data);
    } catch (error) {
        console.error('Silme işlemi başarısız:', error);
    }
};



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