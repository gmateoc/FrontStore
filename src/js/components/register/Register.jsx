import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { RegisterForm } from "./RegisterForm";
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className={"flex justify-content-center align-items-center"} >
        <Row>
            <Col>
                <Card style={{ width: '650px', height: '500px', borderRadius: '20px', marginTop: '100px', backgroundColor: 'black' }}>
                    <Row style={{display:'flex', alignItems:'center',marginLeft:'10px',marginBottom:'0px'}}>
                        <Link to='/admin/login'>
                            <img src="/src/assets/icons/back.svg" 
                                alt="atrás"
                                width='30px'
                                height='30px'
                                className='cursor-pointer'
                                style={{ fill: 'white', alignItems:'center', backgroundColor:'white',borderRadius:'50px', marginRight:'10px' }}
                            />
                        </Link>
                            <p style={{color:'white', marginTop:'11px'}}>Regresar</p>
                    </Row>
                    <Row>
                        <Col 
                            xs={{ span: 12 }} 
                            className={"flex justify-content-center align-items-center"} 
                        >
                            <h2 className={"fw-bold"} style={{color:'white',margin:'0px'}}>¡Registrate!</h2>
                        </Col>
                        <Col xs={{ span: 12 }} className={"d-flex justify-content-center align-items-center"}>
                            <RegisterForm />
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    </div>
  )
}
