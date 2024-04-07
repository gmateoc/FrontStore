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
            <Row>
                <Button>
                    <Link to={`/admin/catalog/${id.userId}/${id.token}`}>
                        Regresar
                    </Link>
                </Button>
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
                    <p>Precio: ${state.value.price}</p>
                </div>
            </Row>
        </>
    )
}

export default GamesDetails
