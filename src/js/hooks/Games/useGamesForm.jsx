import { useState } from 'react';
import { usePostGamesMutation } from './usePostGamesMutation';
import {Row, Col} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const useGamesForm = (values,handleReloadCards)  => {
    const [showDialog, setShowDialog] = useState(false);
    const gamesMutation = usePostGamesMutation();
    const id = useParams();

    const handleInitData = () => {
        return {
            nombre: '',
            stock: '',
            price: '',
            company_id: '',
        }
    }

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
                        />
                    </Col>
                </Row>
                <Row className='m-0'>
                    <Col className='w-100 text-center p-0'>
                        <h4>Agregar nuevo juego</h4>
                    </Col>
                </Row>
            </>
        );
    }

    const handleSubmit = async (values) => {
        const response = await gamesMutation.mutateAsync({
            url: 'http://127.0.0.1:8000/api/games/create',
            data: values,
            token: id.token,
        });
        
        if (response.data.success){
            handleClose();
            handleReloadCards();
        }
    }

    const handleClose = () => {
        setShowDialog(false);
    }

    return {
        showDialog,
        setShowDialog,
        handleHeader,
        handleSubmit,
        handleInitData,
    }
}

export {useGamesForm}
