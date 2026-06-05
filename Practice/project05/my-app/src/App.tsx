import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./components/ui/sheet"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "./components/ui/card"

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
            <div className=" bg-gray-800 min-h-screen ">
                <div className="min-h-screen  flex  items-center justify-center">
                    <Card className="  w-full max-w-sm">
                        <CardHeader>
                            <CardTitle className="text-center">Product Card</CardTitle>
                            <CardDescription>
                                This card uses the small size variant.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                                The card component supports a size prop that can be set to
                                &quot;sm&quot; for a more compact appearance.
                            </p>
                        </CardContent>
                        <CardFooter className="flex gap-3">
                            <Button variant="outline" onClick={() => addToCart(product)} className="px-9 py-6 text-xl rounded-xl bg-gray-600 hover:bg-gray-500 cursor-pointer text-white">
                                Add to Cart
                            </Button>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline" className="px-9 py-6 text-xl rounded-xl bg-gray-600 hover:bg-gray-500 cursor-pointer  text-white">Your Cart</Button>
                                </SheetTrigger>
                                <SheetContent showCloseButton={false}>
                                    <div>
                                        {
                                            cart.length === 0 ?
                                                <p className="text-center font-semibold ">No Cart...</p>
                                                : (
                                                    cart.map((item) => (
                                                        <div className="" key={item.id}>
                                                            <p>
                                                                {item.name}
                                                            </p>
                                                            <p>
                                                                {item.quantity}
                                                            </p>
                                                            <p>
                                                                {item.price}
                                                            </p>
                                                            <div className="flex gap-3">
                                                                <Button onClick={() => IncreaseQuantity(item.id)}>+</Button>
                                                                <Button onClick={() => DecreaseQuantity(item.id)}>-</Button>
                                                            </div>
                                                        </div>

                                                    ))
                                                )
                                        }
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </CardFooter>
                    </Card>
                </div>
            </div>


        </>

    );
};

export default App;