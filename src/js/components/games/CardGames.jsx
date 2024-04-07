import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export const Cards = ({companyGame, listBuyCar, setListBuyCar}) => {
    const id = useParams();

    const [addButtonCar, setAddButtonCar] = useState(false);

    const handleAddBuyCar= () => {
        const game = companyGame;
        setListBuyCar(prevList => [...prevList, game]);
    }

    return (
        <>
            <div className='m-4'
                style={{
                    borderRadius:'10px', 
                    backgroundColor:'#9fbe48', 
                    height:'200px',
                    width:'200px',
                    display:'flex', 
                    alignItems:'center', 
                    justifyContent:'center',
                    flexDirection:'column'
                }}
                >
                <div>
                    <p style={{marginBottom:'0px', marginTop:'0px'}}>{companyGame.game.nombre}</p>
                </div>
                <div>
                    <p style={{marginBottom:'0px', marginTop:'0px'}}>{companyGame.company.nombre}</p>
                </div>
                <div>
                    <p style={{marginBottom:'30px', marginTop:'0px'}}>Precio: ${companyGame.price}</p>
                </div>
                <Button>
                    <Link to={`/admin/detail/${id.userId}/${id.token}`} state={{value: companyGame}}>
                        Ver detalle
                    </Link>
                </Button>
                <Button onClick={handleAddBuyCar}>
                    Agregar al carrito
                </Button>
            </div>
        </>
    )
}
