import React from 'react';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { CustomFormChangeNameInput } from '../../formik/CustomFormInput';
import { Formik, Form } from 'formik';
import { useUpdateUserMutation } from '../../hooks/UseUpdateUserMutation';
import { useParams } from 'react-router-dom';

export const Header = () => {

    const id = useParams();

    const userUpdateMutation = useUpdateUserMutation();

    const handleSubmit = (values) => {
        userUpdateMutation.mutate({
            url: `http://127.0.0.1:8000/api/users/edit/${id.userId}`,
            data: values,
            token: id.token,
        });
    }
    
    const handleData = () => {
        return {
            name: '',
        }
    }

    const start = (
        <>
            <div className={'flex w-full'}>
                <div >
                    <Link to={`/admin/catalog/${id.userId}/${id.token}`} className={'link text-white'}>
                        <p>Catálogo</p>
                    </Link>
                </div>
                <div >
                    <Link to={`/admin/companies/${id.userId}/${id.token}`} className={'link text-white'}>
                        <p style={{marginLeft:'20px'}}>Compañía</p>
                    </Link>
                </div>
            </div>
        </>
    );
    
    const end = (
        <>
                <Formik
                    initialValues={handleData()}
                    onSubmit={(values) => handleSubmit(values)}
                >
                    {() => (
                        <Form className='forms' style={{ width: '100%' }}>
                            <div className='flex justify-content-center align-items-center'>
                                <div className='text-grey' style={{padding:'60px',paddingTop:'10px', paddingBottom:'0px'}}>
                                    <CustomFormChangeNameInput
                                        placeholder='Nuevo nombre'
                                        name='name'
                                        type='text'/>
                                </div>
                                <div className='field my-5 flex justify-content-center'>
                                    <Button
                                        className='login-btn'
                                        label="Cambiar de nombre"
                                        rounded
                                        severity="warning"
                                        type="submit"
                                    />
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </>
    );

    return (
        <div>
            <Menubar style={{width:'100%', backgroundColor:'transparent', borderColor:'transparent'}} start={start} end={end} />
        </div>
    )
}
