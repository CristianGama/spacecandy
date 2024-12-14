import React, { createContext, useState } from "react";

export const ShoppingCarContext = createContext();


export function ShoppingCarProvider({ children }) {
    const [car, setCar] = useState({})

    const addProduct = (name, quantity, price) => {
        const newCar = {...car}
        if(car[name]){
            newCar[name]['quantity'] += quantity
        }else{
            newCar[name] = {
                'quantity':quantity,
                'price': price
            }
        }
        setCar(newCar)
    };

    const removeProduct = name => {
        const newCar = {...car}
        if(car[name]){
            newCar[name]['quantity'] -= 1
            if(newCar[name]['quantity'] <= 0){
                delete newCar[name]
            }
        }
        setCar(newCar)
    };

    const clearCar = () => {
        setCar({});
    };

    const value = {
        car,
        addProduct,
        removeProduct,
        clearCar
    };

    return (
        <ShoppingCarContext.Provider value={value}>
            {children}
        </ShoppingCarContext.Provider>
    );
}
