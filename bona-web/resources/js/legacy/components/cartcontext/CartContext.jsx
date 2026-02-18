import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // 1. ESTADO INICIAL: Intentar cargar desde localStorage al arrancar
    // Usamos una función "lazy" para que solo se ejecute una vez
    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedCart = localStorage.getItem('bona_cart');
            // Si existe, lo convertimos de texto a Array. Si no, empezamos vacío.
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error("Error cargando el carrito de localStorage:", error);
            return [];
        }
    });

    // 2. PERSISTENCIA: Guardar en localStorage cada vez que el carrito cambie
    useEffect(() => {
        localStorage.setItem('bona_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // 3. FUNCIÓN: Añadir producto (o sumar cantidad si ya existe)
    const addToCart = (dish, cantidad) => {
        setCartItems((prevItems) => {
            const isItemInCart = prevItems.find((item) => item.id === dish.id);

            if (isItemInCart) {
                // Si ya existe, mapeamos y sumamos la nueva cantidad
                return prevItems.map((item) =>
                    item.id === dish.id
                        ? { ...item, quantity: item.quantity + cantidad }
                        : item
                );
            }
            // Si es nuevo, lo añadimos al array con su cantidad
            return [...prevItems, { ...dish, quantity: cantidad }];
        });
    };

    // 4. FUNCIÓN: Eliminar un producto específico
    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // 5. FUNCIÓN: Vaciar el carrito (por ejemplo, tras el pago en PayForm)
    const clearCart = () => {
        setCartItems([]);
    };

    // 6. CÁLCULOS DINÁMICOS: Totales que consumen Header y PayForm
    // Calculamos el precio total sumando (precio * cantidad) de cada item
    const cartTotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    // Calculamos el número total de unidades (para el Badge del Header)
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                cartTotal,
                totalItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Hook personalizado para usar el carrito fácilmente
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe usarse dentro de un CartProvider");
    }
    return context;
};