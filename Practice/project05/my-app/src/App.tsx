import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

type Product = {
    id: number,
    name: string,
    price: number,
}
type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

const App = () => {
    const [cart, setCart] = useState<CartItem[]>([])
    const addToCart = (product: Product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    }
    const removeItem = (id: number) => {
        setCart(cart.filter(item => item.id !== id))
    }
    const IncreaseQuantity = (id: number) => {
        setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    }
    const DecreaseQuantity = (id: number) => {
        setCart(cart.map(item => item.id === id ? { ...item, qunatity: item.quantity - 1 } : item))
    }
    const total = cart.reduce((sum, item) =>
        sum + item.price * item.quantity,
        0
    )
    const CartBadgeCount = cart.reduce((sum, item) =>
        sum + item.quantity,
        0
    )
    return (
        <>
            <div>

            </div>
            <Button onclick={() => addToCart(product)}>Add to Cart</Button>
        </>

    );
};

export default App;