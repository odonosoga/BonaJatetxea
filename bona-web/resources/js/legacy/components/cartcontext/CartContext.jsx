import React, { createContext, useContext, useState } from 'react';

// Inicializamos con un objeto vacío para evitar errores de undefined
const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity) => {
        setCartItems((prev) => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => 
                    item.id === product.id 
                    ? { ...item, quantity: item.quantity + quantity } 
                    : item
                );
            }
            return [...prev, { ...product, quantity }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const clearCart = () => setCartItems([]);

    const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{ 
            cartItems, 
            addToCart, 
            removeFromCart, 
            clearCart, 
            cartTotal, 
            totalItems 
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    // Si no hay contexto, devolvemos un objeto vacío en lugar de lanzar un error que bloquee todo
    if (context === undefined || Object.keys(context).length === 0) {
        console.warn("useCart se está ejecutando fuera de un CartProvider");
        return {
            cartItems: [],
            addToCart: () => {},
            removeFromCart: () => {},
            clearCart: () => {},
            cartTotal: 0,
            totalItems: 0
        };
    }
    return context;
};