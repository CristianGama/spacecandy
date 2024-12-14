import '../styles/home.css'

import astronauta from '../assets/astronauta.png'
import sol from '../assets/sol.png'
import luna from '../assets/luna.png'
import ovni from '../assets/ovni.png'
import logotipo from '../assets/logotipo.png'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home(){

    const navigate = useNavigate()

    const [animationEnded, animationHasEnded] = useState(false)

    useEffect(() => {
        if(animationEnded){
            navigate('/categories')
        }
    }, [animationEnded])

    return (
        <>
            <div className='container'>
                <img src={logotipo} alt="logotipo" className='logotipo' onAnimationEnd={(e) => {e.animationName == 'moverLogo2' ? animationHasEnded(true): ''}}/>
                <img src={astronauta} alt="astronauta" className='astronauta' />
                <img src={sol} alt="sol" className='sol '/>
                <img src={luna} alt="luna" className='luna' />
                <img src={ovni} alt="ovni" className='ovni' />
            </div>
            
        </>
    )
}