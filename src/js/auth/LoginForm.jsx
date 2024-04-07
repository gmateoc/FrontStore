import { Button } from 'primereact/button';
import { Formik, Form } from 'formik';
import { CustomFormLoginInput } from '../formik/CustomFormInput';
import { usePostMutation } from '../hooks/commons/UsePostMutation';
import { ValidationLogin } from '../validations/ValidationLogin';
import { Link } from 'react-router-dom';

export const LoginForm = () => {

    const userMutation = usePostMutation();

    const handleSubmit = (values) => {
        userMutation.mutate({
            url: 'http://127.0.0.1:8000/auth/login',
            data: values
        });
    }
    
    const handleData = () => {
        return {
            email: '',
            password: '',
        }
    }

    return(
        <>
            <Formik
                initialValues={handleData()}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={ValidationLogin}
            >
                {() => (
                    <Form className='forms' style={{ width: '100%' }}>
                        <div className='text-grey' style={{padding:'60px',paddingTop:'10px', paddingBottom:'0px'}}>
                            <CustomFormLoginInput
                                placeholder='Correo electrónico'
                                name='email'
                                type='text'/>
                            <CustomFormLoginInput
                                placeholder='Contraseña'
                                name='password'
                                type='password'/>
                        </div>
                        <div className='field my-5 flex justify-content-center'>
                            <Button
                                className='login-btn'
                                label="Iniciar sesión"
                                rounded
                                severity="warning"
                                type="submit"
                            />
                        </div>
                        <Link to="/admin/register" className={'link'}>
                            <h2 className={"flex align-items-center justify-content-center "} style={{color:'white'}}>Registrarse</h2>
                        </Link>
                    </Form>
                )}
            </Formik>
        </>
    )
}