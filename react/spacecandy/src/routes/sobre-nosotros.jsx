import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/information.css'

export default function Mision(){

    return (
        <div className='information'>
            <div className='right'>
                <div className='mision'>
                    <h1>Mision</h1>
                    <p>Endulzar la vida de nuestros clientes a través de productos de alta calidad y transportarlos a un universo de sabores con productos dulces, ácidos y picosos que generen momentos de felicidad y sorpresa. Nos comprometemos a brindar una experiencia innovadora, accesible y auténtica que combine la esencia de los dulces mexicanos con un toque especial y moderno, conquistando a personas de todas las edades.</p>
                </div>
                <div className='vision'>
                    <h1>Vision</h1>
                    <p>Ser la dulcería electrónica de referencia en México, ofreciendo una experiencia única que combina sabores comunes en nuestro país con creatividad espacial. Queremos llevar dulzura y sorpresa a cada rincón del país, conectando con nuestros clientes en cada pedido.</p>
                </div>
            </div>
            <div className='valores'>
                <h1>Valores</h1>
                <div className='valores-list'>
                    <ul>
                        <li><div className='subtitle'>Calidad galáctica:</div> Utilizamos los mejores ingredientes y técnicas para asegurar que cada producto sea de alta calidad y sorprenda al paladar de nuestros clientes.</li>
                    </ul>
                    <ul>
                        <li><div className='subtitle'>Innovación cósmica:</div> Nos reinventamos constantemente para crear sabores únicos, productos divertidos y presentaciones inspiradas en el espacio, buscando siempre sorprender y deleitar.</li>
                    </ul>
                    <ul>
                        <li><div className='subtitle'>Alegría estelar:</div> Queremos ser una fuente de alegría en la vida de nuestros clientes, creando momentos especiales y dulces recuerdos.</li>
                    </ul>
                    <ul>
                        <li><div className='subtitle'>Autenticidad mexicana:</div> Valoramos los sabores y gustos que son parte de la vida diaria en México, dándoles un giro único que conecta con todos.</li>
                    </ul>
                    <ul>
                        <li><div className='subtitle'>Compromiso con el planeta:</div> Nos preocupamos por el medio ambiente, utilizando empaques ecológicos y fomentando prácticas sostenibles para proteger nuestro mundo (y el universo).</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}