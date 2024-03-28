import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <div className={"d-flex justify-content-center align-items-center h-100"} >
            <Row>
                <Col>
                    <Card style={{ width: '650px', height: '500px', borderRadius: '20px', marginTop: '100px', backgroundColor: 'black' }}>
                        <Row>
                            <Col xs={{ span: 12 }} className={"d-flex justify-content-center align-items-end"}>
                                <h2 className={"fw-bold"} style={{color:'white'}}>¡Bienvenido!</h2>
                            </Col>
                            <Col xs={{ span: 12 }} className={"d-flex justify-content-center align-items-center"}>
                                <LoginForm />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
  )
}
