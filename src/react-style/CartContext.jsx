import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}){
    const [cart, setCart] = useState([]);

    function addToCart(book){
        const existingBook = cart.find(item => item.name === book);

        if(existingBook){
            setCart(
                cart.map(item=> 
                    item.name === book
                        ? { ...item, quantity: item.quantity + 1}
                        : item
                )
            );
        }
        else {
            setCart([...cart, {name: book, quantity: 1}]);
        }
    }

    function removeFromCart(book){
        setCart(cart.filter(item => item.name !== book));
    }

    function updateQuantity(book, amount){
        setCart(
            cart.map(item =>
                item.name === book
                    ? { ...item, quantity: item.quantity + amount }
                    : item
            ).filter(item => item.quantity > 0)
        );
    }

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, updateQuantity}}>
            {children}
        </CartContext.Provider>
    );
}