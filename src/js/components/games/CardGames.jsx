import React from 'react';
import { Button } from 'react-bootstrap';


export const Cards = ({game}) => {

    const {id,nombre} = game;

    return (
        <>
            <div className='d-flex ml-4'
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
                <div >
                    <p>{nombre}</p>
                </div>
                <div></div>
                <Button>
                    Agregar al carrito
                </Button>
            </div>
        </>
    )
}
