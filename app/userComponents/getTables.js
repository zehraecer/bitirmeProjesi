"use server";
import { createClient } from "@/utils/supabase/server";

export const GetProducts = async () => {
    const supabase = createClient();
    const { data: Products, error: ProductError } = await supabase.from("Products").select("*");

    if (ProductError) {
        console.log("Error fetching products:", ProductError);
        return null;
    }

    return Products;
};

export const GetCategory = async () => {
    const supabase = createClient();
    const { data: Products_category, error: Products_categoryError } = await supabase.from("Products_category").select("*");

    if (Products_categoryError) {
        console.log("Error fetching Products_category:", Products_categoryError);
        return null;
    }
    return Products_category;
};

export const GetColor = async () => {
    const supabase = createClient();
    const { data: Products_Color, error: colorError } = await supabase.from("Products_Color").select("*");

    if (colorError) {
        console.log("Error fetching colorError:", colorError);
        return null;
    }

    return Products_Color;
};

export const GetBasket = async () => {
    const supabase = createClient();
    const { data: Products_basket, error: BasketError } = await supabase.from("Products_basket").select("*");

    if (BasketError) {
        console.log("Error fetching Products_basket:", BasketError);
        return null;
    }
    return Products_basket;
};
