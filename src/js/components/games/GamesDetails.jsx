import React from 'react';
import { Header } from '../header/Header';
import { Row, Button } from 'react-bootstrap';
import {useLocation, useParams, Link} from 'react-router-dom';

const GamesDetails = () => {

    let {state} = useLocation();
    const id = useParams();

    return (
        <>
            <Row>
                <Header/>
            </Row>
            <Row style={{display:'flex', alignItems:'center'}}>
                <Link to={`/admin/catalog/${id.userId}/${id.token}`}>
                    <img src="/src/assets/icons/back.svg" 
                        alt="atrás"
                        width='30px'
                        height='30px'
                        className='cursor-pointer'
                        style={{ fill: 'black', alignItems:'center', backgroundColor:'white',borderRadius:'50px' }}
                    />
                </Link>
                    <p style={{color:'white', marginTop:'11px'}}>Regresar</p>
            </Row>
            <Row>
                <div style={{display:'flex',justifyContent:'center',fontSize:'40px', fontWeight:'bold'}}>
                    <p>Detalle del juego:</p>
                </div>
                <div style={{display:'flex',justifyContent:'center',fontSize:'20px', fontWeight:'bold'}}>
                    <p>Nombre del juego: {state.value.game.nombre}</p>
                </div>
                <div style={{display:'flex',justifyContent:'center',fontSize:'20px', fontWeight:'bold'}}>
                    <p>Nombre de la compañía creadora: {state.value.company.nombre}</p>
                </div>
                <div style={{display:'flex',justifyContent:'center',fontSize:'20px', fontWeight:'bold'}}>
                    <p>Stock: {state.value.stock} und.</p>
                </div>
                <div style={{display:'flex',justifyContent:'center',fontSize:'20px', fontWeight:'bold'}}>
                    <p>Precio: ${state.value.price}</p>
                </div>
            </Row>
        </>
    )
}

export default GamesDetails
