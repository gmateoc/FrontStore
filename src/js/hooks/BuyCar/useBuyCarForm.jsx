import { useState } from 'react';
import {Row, Col} from 'react-bootstrap';

const useBuyCarForm = ()  => {
    const [showDialog, setShowDialog] = useState(false);

    const handleHeader = () => {
        return (
            <>
                <Row className='m-0'>
                    <Col className='p-0' style={{textAlign:'end'}}>
                        <img src="/src/assets/icons/close-circle.svg"
                             alt="Close"
                             width='30px'
                             height='30px'
                             className='cursor-pointer'
                             onClick={handleClose}
                             style={{backgroundColor:'white',borderRadius:'50px'}}
                        />
                    </Col>
                </Row>
                <Row className='m-0'>
                    <Col className='w-100 text-center p-0'>
                        <h4>Lista de juegos agregados</h4>
                    </Col>
                </Row>
            </>
        );
    }

    const handleClose = () => {
        setShowDialog(false);
    }

    return {
        showDialog,
        setShowDialog,
        handleHeader,
    }
}

export {useBuyCarForm}
