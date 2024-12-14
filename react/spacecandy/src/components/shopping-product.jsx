import { useEffect, useState, useContext } from 'react'
import { ShoppingCarContext } from '../components/shopping-context'

export default function ShoppingProduct({properties, productName}){
    const { removeProduct } = useContext(ShoppingCarContext)
    return (
        <div className='shopping-car-product'>
            <h3>{productName}</h3>
            <h4>Cantidad: x{properties['quantity']}</h4>
            <h4>SubTotal: {properties['quantity'] * properties['price']}$</h4>
            <button onClick={e=>removeProduct(productName)}>Eliminar x1</button>
        </div>
    )
}