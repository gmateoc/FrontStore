import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
            <Row>
                <Col>
                    <Card style={{ width: '650px', height: '500px', borderRadius: '20px', marginTop: '100px', backgroundColor: 'black' }}>
                        <Row>
                            <Col className={"flex justify-content-center align-items-center"} style={{paddingTop:'0px',paddingBottom:'10px'}}>
                                <h2 className={"fw-bold"} style={{color:'white'}}>¡Bienvenido!</h2>
                            </Col>
                            <Col className={"d-flex justify-content-center align-items-center"}>
                                <LoginForm />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
  )
}
