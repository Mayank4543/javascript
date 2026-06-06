import { useState } from "react";
import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from "./components/ui/card"

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
        const updatedValues = cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
        console.log("bbcds",updatedValues)
        
        setCart(updatedValues)
    }
    const DecreaseQuantity = (id: number) => {
        console.log("nbfdksfnsd", id)
        setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity>1?item.quantity-1:1 } : item))
    }
    const total = cart.reduce((sum, item) =>
        sum + item.price * item.quantity,
        0
    )
    const CartBadgeCount = cart.reduce((sum, item) =>
        sum + item.quantity,
        0
    )
    const product: Product = {
        id: 1,
        "name": "Guitar",
        "price": 500

    }
    return (
        <>
            <div className=" bg-gray-800 min-h-screen ">
                <div className="min-h-screen  flex  items-center justify-center">
                    <Card className="  w-full max-w-sm">
                        <CardHeader>
                            <CardTitle className="text-center">Product Card</CardTitle>
                            
                        </CardHeader>
                        <CardContent>
                            <p>
                               {product.name}
                            </p>
                            <p>
                                {product.price}
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
                                                        <div className="" key={item.id} >
                                                            <p>
                                                               Product Name: {item.name}
                                                            </p>
                                                            <p>
                                                              Product Quantity:  {item.quantity}
                                                            </p>
                                                            <p>
                                                               Price: {item.price *item.quantity}
                                                            </p>
                                                            <div className="flex gap-2">
                                                                <Button onClick={() => IncreaseQuantity(item.id)} className="px-6 py-5 font-semibold">+</Button>
                                                                <Button onClick={() => DecreaseQuantity(item.id)} className="px-6 py-5 font-semibold">-</Button>
                                                                <Button onClick={() => removeItem(item.id)} className="px-6 py-5 font-semibold rounded-xl">Remove</Button>

                                                            </div>
                                                            <p className="text-green-300 py-px">Total Price:{total}</p>
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