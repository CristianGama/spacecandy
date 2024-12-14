import '../styles/category.css'

import { useContext, useEffect, useState } from 'react'
import { ShoppingCarContext } from '../components/shopping-context'
import img1 from '../assets/products/1.png'
import img2 from '../assets/products/2.png'
import img3 from '../assets/products/3.png'
import img4 from '../assets/products/4.png'
import img5 from '../assets/products/5.png'
import img6 from '../assets/products/6.png'
import img7 from '../assets/products/7.png'
import img8 from '../assets/products/8.png'
import img9 from '../assets/products/9.png'
import img10 from '../assets/products/10.png'
import img11 from '../assets/products/11.png'
import img12 from '../assets/products/12.png'
import img13 from '../assets/products/13.png'
import img14 from '../assets/products/14.png'
import img15 from '../assets/products/15.png'
import img16 from '../assets/products/16.png'
import img17 from '../assets/products/17.png'
import img18 from '../assets/products/18.png'
import img19 from '../assets/products/19.png'
import img20 from '../assets/products/20.png'
import img21 from '../assets/products/21.png'
import img22 from '../assets/products/22.png'
import img23 from '../assets/products/23.png'
import img24 from '../assets/products/24.png'
import img25 from '../assets/products/25.png'
import img26 from '../assets/products/26.png'
import img27 from '../assets/products/27.png'
import img28 from '../assets/products/28.png'

const productsInfo = {
    'Meteoritos de Chamoy': {
        'description': 'Dulces duros con relleno líquido de chamoy.',
        'img': img1
    },
    'Paleta Espacial': {
        'description': 'Paleta de tamarindo y chile con forma de planeta.',
        'img': img2
    },
    'Meteoro Mango Loco': {
        'description': 'Caramelos de mango ácido con chile en polvo que “explotan” en la boca.',
        'img': img3
    },
    'Estrellas Enchiladas': {
        'description': 'Gomitas en forma de estrellas cubiertas con chile en polvo y picantes.',
        'img': img4
    },
    'Lunas de  Fresa y Chamoy': {
        'description': 'Dulces de fresa en forma de media luna con un toque de chamoy.',
        'img': img5
    },
    'Chispas Estelares de Tamarindo': {
        'description': 'Pequeños caramelos de tamarindo y chile, para una explosión de sabor.',
        'img': img6
    },
    'Estallido de Guayaba': {
        'description': 'Caramelos suaves de guayaba con chile, para un sabor dulce y picoso.',
        'img': img7
    },
    'Cometas de Fuego': {
        'description': 'Paletas en forma de cometas recubiertas con chile en polvo.',
        'img': img8
    },
    'Agujeros Negros Ácidos': {
        'description': 'Caramelos redondos súper ácidos con un toque de chile.',
        'img': img9
    },
    'Nebulosa Ácida': {
        'description': 'Gomitas ácidas con formas de nebulosa y sabores cítricos.',
        'img': img10
    },
    'Meteoritos Ácidos': {
        'description': 'Bolitas masticables frutales con un centro ácido.',
        'img': img11
    },
    'Estrellas de Limón Brillante': {
        'description': 'Gomitas ácidas en forma de estrellas con sabores cítricos.',
        'img': img12
    },
    'Nebulosas de Algodón de Azúcar': {
        'description': 'Algodón de azúcar en tonos pastel que evoca nebulosas espaciales.',
        'img': img13
    },
    'Planetas de Cajeta': {
        'description': 'Dulces de cajeta en forma de planetas con envolturas brillantes.',
        'img': img14
    },
    'Supernovas de Coco': {
        'description': 'Bolitas suaves de coco y vainilla para un sabor delicado.',
        'img': img15
    },
    'Láseres de Fresa': {
        'description': 'Dulces suaves de fresa con un toque explosivo.',
        'img': img16
    },
    'Dulce de Cielo Azul': {
        'description': 'Caramelo cremoso de sabor frutal, recuerda la inmensidad del espacio.',
        'img': img17
    },
    'Galaxias de Fresa y Crema': {
        'description': 'Gomitas de fresa con crema, suaves y deliciosas.',
        'img': img18
    },
    'Mini Estrellas de Mazapán': {
        'description': 'Estrellas de mazapán con chocolate, para un sabor dulce y tradicional.',
        'img': img19
    },
    'Gomitas de Naves Espaciales': {
        'description': 'Gomitas frutales en forma de naves y astronautas, ideales para niños.',
        'img': img20
    },
    'Alienígenas de Chamoy': {
        'description': 'Gomitas con centro líquido de chamoy, explosión picoso.',
        'img': img21
    },
    'Asteroides Ácidos': {
        'description': 'Gomitas duras con sabor ácido y sal, que realzan lo frutal.',
        'img': img22
    },
    'Papas de Saturno': {
        'description': 'Chips de papa con chile y limón en forma de anillos.',
        'img': img23
    },
    'Nopalitos Siderales': {
        'description': 'Nopal deshidratado con limón y chile, snack saludable y picante.',
        'img': img24
    },
    'Meteoro de Fruta Deshidratada': {
        'description': 'Fruta deshidratada con chile y limón, dulce y picosa.',
        'img': img25
    },
    'Estrellitas de Maíz': {
        'description': 'Snack crujiente de maíz sabor queso, para todas las edades.',
        'img': img26
    },
    'Palomitas Cósmicas': {
        'description': 'Palomitas con chile y limón, un snack ligero y sabroso.',
        'img': img27
    },
    'Cacahuates Enchilados Nebulares': {
        'description': 'Cacahuates crujientes cubiertos de chile y limón, picosos y deliciosos.',
        'img': img28
    },
}

function Product({name, price}){

    const { addProduct } = useContext(ShoppingCarContext)
    return(
        <div className='product'>
            <img src={productsInfo[name]['img']} alt="" />
            <h4 className='name'>{name}</h4>
            <div className='description'>{productsInfo[name]['description']}</div>
            <p className='price'>${price}</p>
            <button className='add-product' onClick={e=>addProduct(name, 1, price)}>Agregar Producto</button>
        </div>
    )
}

export default function Category({id, title}){

    const url = `http://localhost:8000/commerce/products/${id}`

    const [products, setProducts] = useState({});
    
    useEffect(()=>{
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
            return response.json(); // Convertir la respuesta a JSON
        })
        .then(data => {
            setProducts(data)
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud:', error);
        });
    }, [])

    return(
        <>
            <div className='main-menu'>
                <div className='menu'>
                    <div className='title'>
                        <h3>{title}</h3>
                    </div>
                    <div className='products'>
                        
                        {
                            Object.keys(products).map((value,index) => {
                                return <Product key={index} price={products[value]['price']} name={products[value]['name']}></Product>
                            })
                        }
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}