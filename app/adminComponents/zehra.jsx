"use server"
export const AddProduct = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formObj = Object.fromEntries(formData.entries());

    try {

        const photoResponse = await fetch('/api/getPhoto', {
            method: 'POST',
            body: formData,
        });

        if (!photoResponse.ok) {
            const photoData = await photoResponse.json();
            console.error(photoData);
            throw new Error("resim yükleme hatsı ");
        }

        const { imageUrl } = await photoResponse.json();
        const response = await fetch('/api/adminAddProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                description: formObj.description,
                category: formObj.category,
                price: formObj.price,
                discount_rate: formObj.discount,
                product_img: imageUrl,
                stock: formObj.stock,
                product_color: formObj.color
            })
        });

        if (!response.ok) {
            const data = await response.json();
            console.log(data);
            throw new Error('hata');

        }
    } catch (error) {
        console.log(error);

    }
}
