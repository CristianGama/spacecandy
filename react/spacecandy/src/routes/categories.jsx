import '../styles/categories.css'

import logotipo from '../assets/logotipo.png'
import marte from '../assets/marte.png'
import tierra from '../assets/tierra.png'
import saturno from '../assets/saturno.png'
import neptuno from '../assets/neptuno.png'
import venus from '../assets/urano.png'
import estrella from '../assets/estrella.png'
import coheteespacial from '../assets/cohete-espacial.png'
import cohete from '../assets/cohete.png'
import face from '../assets/face.png'
import pinterest from '../assets/pinterest.png'
import instagram from '../assets/instagram.png'

import { useEffect, useState, useContext } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { ShoppingCarContext } from "../components/shopping-context"
import ShoppingProduct from '../components/shopping-product'
import ShoppingConfirmation from './shoppingConfirmation'

export default function Categories(){

    const navigate = useNavigate()

    const [category, setCategory] = useState('')
    const [hasOpenShoppingCar, OpenShoppingCar] = useState(false)
    const { car } = useContext(ShoppingCarContext)

    useEffect(() => {
        if(category.includes('categories')){
            if(window.location.pathname != '/categories/'){
                navigate(`/categories`)
            }
            
        }else{
            navigate(`/categories/${category}`)
        }
    },[category])

    const getTotal = ()=>{
        let total = 0
        Object.keys(car).map((value,index) => {
            total += car[value]['quantity'] * car[value]['price']
        })
        return total
    }

    const confirmBuy = (e)=>{
        if(getTotal()>0){
            alert('Compra Realizada')
            window.location.reload()
            return
        }
        alert('No tienes productos para realizar la compra')
    }

    return (
        <>
            <Outlet />
            <ShoppingConfirmation></ShoppingConfirmation>
            <img src={estrella} alt="estrella1" className={category.length > 0 && !(category.includes('terminos-condiciones') || category.includes('avisos-privacidad') || category.includes('categories') || category.includes('sobre-nosotros')) ? `estrella estrella-1-unhide` : 'estrella'} id='estrella-1'/>
            <img src={estrella} alt="estrella2" className={category.length > 0 && !(category.includes('terminos-condiciones') || category.includes('avisos-privacidad') || category.includes('categories') || category.includes('sobre-nosotros')) ? `estrella estrella-2-unhide` : 'estrella'} id='estrella-2'/>
            <img src={estrella} alt="estrella3" className={category.length > 0 && !(category.includes('terminos-condiciones') || category.includes('avisos-privacidad') || category.includes('categories') || category.includes('sobre-nosotros')) ? `estrella estrella-3-unhide` : 'estrella'} id='estrella-3'/>
            <img src={logotipo} alt="logotipo2" className='logotipo2'/>

            <nav>
                <ul>
                    <li onClick={(e) => {setCategory('categories')}}>Categorias</li>
                    <li onClick={(e) => {setCategory('sobre-nosotros')}}>Sobre Nosotros</li>
                    <li><img src={coheteespacial} alt="carrito" onClick={(e) => {OpenShoppingCar(!hasOpenShoppingCar)}}/></li>
                </ul>
            </nav>

            <div className={`shopping-car ${hasOpenShoppingCar? 'open-shopping':''}`}>
                <img src={cohete} alt="cohete" className='cohete'/>
                <h1>CARRITO</h1>
                <div className='shopping-car-products'>
                    {
                        Object.keys(car).map((value,index) => {
                            return <ShoppingProduct key={index} productName={value} properties={car[value]}></ShoppingProduct>
                        })
                    }
                </div>
                <h3>Total: {getTotal()}$</h3>
                <button onClick={confirmBuy}>Confirmar Comprar</button>
            </div>
            
            <div className={category.length > 0 && !(category.includes('categories')) ? `container-main zoom-${category}` : 'container-main'}>
                <div className='container-categories'>
                    <div className='category'>
                        <div className='image-container'>
                            <img src={neptuno} alt="neptuno" className='neptuno' />
                        </div>
                        <button onClick={(e) => {setCategory('explosiones-picosas')}}><h1>Explosiones Picosas</h1></button>
                    </div>
                    <div className='category'>
                        <div className='image-container'>
                            <img src={saturno} alt="saturno" className="saturno" />
                        </div>
                        <button onClick={(e) => {setCategory('acidos-intergalacticos')}}><h1>Acidos Integalacticos</h1></button>
                        
                    </div>
                    <div className='category'>
                        <div className='image-container'>
                            <img src={tierra} alt="tierra" className='tierra' />
                        </div>
                        <button onClick={(e) => {setCategory('dulces-galacticos')}}><h1>Dulces<br/>Galacticos</h1></button>
                        
                    </div>
                    <div className='category'>
                        <div className='image-container'>
                            <img src={marte} alt="marte" className='marte' />
                        </div>
                        <button onClick={(e) => {setCategory('gomitas-cosmicas')}}><h1>Gomitas<br/>Cosmicas</h1></button>
                        
                    </div>     
                    <div className='category'>
                        <div className='image-container'>
                            <img src={venus} alt="venus" className='venus' />
                        </div>
                        <button onClick={(e) => {setCategory('snacks-espaciales')}}><h1>Snacks<br/>Espaciales</h1></button>
                        
                    </div>    
                </div>
            </div>
            <footer>
                <ul>
                    <li className='social'>
                        <a href="https://www.facebook.com/share/15beUzJDLB/?mibextid=LQQJ4d" target="_blank"><img src={face} alt="face" /></a>
                        <a href="https://www.instagram.com/candy_spc?igsh=Z2N0YWgzOGxubDdk&utm_source=qr" target='_blank'><img src={instagram} alt="instagram" /></a>
                        <a href="https://pin.it/4GXuBiQoM" target="_blank"><img src={pinterest} alt="pinterest" /></a>
                    </li>
                    <li className='footer-section' onClick={(e) => {setCategory('terminos-condiciones')}}>Terminos Y Condiciones</li>
                    <li className='footer-section' onClick={(e) => {setCategory('avisos-privacidad')}}>Aviso de Privacidad</li>
                    <li>© 2024 SpaceCandy. <br/>Todos los derechos reservados. </li>
                </ul>
            </footer>
        </>
    )
}