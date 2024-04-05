import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { RegisterForm } from "./RegisterForm";

export const Register = () => {
  return (
    <div className={"flex justify-content-center align-items-center"} >
        <Row>
            <Col>
                <Card style={{ width: '650px', height: '500px', borderRadius: '20px', marginTop: '100px', backgroundColor: 'black' }}>
                    <Row>
                        <Col xs={{ span: 12 }} className={"flex justify-content-center align-items-center"} style={{paddingTop:'0px',paddingBottom:'10px'}}>
                            <h2 className={"fw-bold"} style={{color:'white'}}>¡Registrate!</h2>
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
