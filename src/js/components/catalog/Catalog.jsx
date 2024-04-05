import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Header } from '../header/Header';
import { useFetchQuery } from '../../hooks/useFetchQuery';
import { Link, useParams } from 'react-router-dom';
import { Cards } from '../games/CardGames';

export const Catalog = () => {


    const id = useParams();

    const gamesQuery = useFetchQuery({url: 'http://127.0.0.1:8000/api/games/all', params: '', token: id.token, queryName: 'gamesAll'});

    return (
        < >
            <Row>
                <Header/>
            </Row>
            <Row>
                <Link to={``}>
                    <button>Agregar juego nuevo</button>
                </Link>
            </Row>
            <Row>
                <div style={{display:'flex'}}>
                    {
                        Array.isArray(gamesQuery?.data?.data) && gamesQuery?.data?.data.map((game)=>(
                            
                                <Cards key={game.id} game={game}/>
                            
                        ))
                    }
                </div>
            </Row>
        </>
    )
}
