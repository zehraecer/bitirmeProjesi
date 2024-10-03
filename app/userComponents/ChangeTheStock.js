
export async function ChangeStock(productId, stockValue) {
    console.log("Product ID:", productId);
    console.log("Stock Value:", stockValue);
    try {
        const response = await fetch("/api/StockChange", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: productId, stock: stockValue }),
        });

        if (!response.ok) {
            throw new Error("Ürün güncellenirken bir hata oluştu.");
        }

        const data = await response.json();
        console.log("Ürün başarıyla güncellendi:", data);
    } catch (error) {
        console.log(error);
        console.error("Güncelleme işlemi başarısız:", error);
    }

}