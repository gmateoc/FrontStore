import { Button } from 'primereact/button';
import { Formik, Form } from 'formik';
import { CustomFormLoginInput } from '../../formik/CustomFormInput';
import { useRegisterMutation } from '../../hooks/UseRegisterMutation';
import { ValidationRegister } from '../../validations/ValidationRegister';

export const RegisterForm = () => {

    const userMutation = useRegisterMutation();

    const handleSubmit = (values) => {
        userMutation.mutate({
            url: 'http://127.0.0.1:8000/auth/register',
            data: values
        });
    }
    
    const handleData = () => {
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    return(
        <>
            <Formik
                initialValues={handleData()}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={ValidationRegister}
            >
                {(formik) => (
                    <Form className='forms' style={{ width: '100%' }}>
                        <div className='text-grey' style={{padding:'60px',paddingTop:'0px', paddingBottom:'0px'}}>
                            <CustomFormLoginInput
                                placeholder='Nombre'
                                name='name'
                                type='text'/>
                            <CustomFormLoginInput
                                placeholder='Correo electrónico'
                                name='email'
                                type='text'/>
                            <CustomFormLoginInput
                                placeholder='Contraseña'
                                name='password'
                                type='password'/>
                            <CustomFormLoginInput
                                placeholder='Confirmar contraseña'
                                name='confirmPassword'
                                type='password'/>
                        </div>
                        <div className='field my-5 flex justify-content-center'>
                            <Button
                                className='login-btn'
                                label="Registrar"
                                rounded
                                severity="warning"
                                type="submit"
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}