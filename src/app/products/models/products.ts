import { ProductModel } from "./product-model";

export const products: ProductModel[] = [
    {
        id: 1,
        brand: 'Asus',
        model: 'F15',
        category: 'laptop',
        price: 1000,
        isAvailable: true,
        isInCart: false
    },
    {
        id: 2,
        brand: 'HP',
        model: 'ELITEBOOK',
        category: 'laptop',
        price: 1100,
        isAvailable: true,
        isInCart: false
    },
    {
        id: 3,
        brand: 'Apple',
        model: 'MacBook',
        category: 'laptop',
        price: 1200,
        isAvailable: false,
        isInCart: false
    },
    {
        id: 4,
        brand: 'Acer',
        model: 'Nitro',
        category: 'laptop',
        price: 1499,
        isAvailable: true,
        isInCart: false
    },
    {
        id: 5,
        brand: 'Lenovo',
        model: 'ThinkPad',
        category: 'laptop',
        price: 1000,
        isAvailable: true,
        isInCart: false
    },
    {
        id: 6,
        brand: 'MSI',
        model: 'Creator',
        category: 'laptop',
        price: 1500,
        isAvailable: true,
        isInCart: false
    },
]