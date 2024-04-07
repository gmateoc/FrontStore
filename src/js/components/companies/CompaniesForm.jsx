import { Button } from 'primereact/button';
import { Formik, Form } from 'formik';
import { CustomFormLoginInput } from '../../formik/CustomFormInput';
import { Dialog } from 'primereact/dialog';
import { dialogConfig } from '../../utils/DialogConfig';
import { useCompaniesForm } from '../../hooks/Companies/useCompaniesForm';
import { ValidationCompany } from '../../validations/ValidationCompany';

export const CompaniesForm = ({handleReloadCards = () =>{} }) => {

    const {showDialog,
        setShowDialog,
        handleInitData,
        handleHeader,
        handleSubmit,} = useCompaniesForm(null,handleReloadCards);
        
    return(
        <>
            {
                <Button
                className='rounded-circle bg-none border-0 p-10 mx-10'
                onClick={() => setShowDialog(true)}
                >
                    Agregar nueva compañía
                </Button>
            }
            
            <Dialog
                visible={showDialog}
                style={{ width: '50vw' }}
                pt={dialogConfig}
                onHide={() => setShowDialog(false)}
                closable={false}
                header={() => handleHeader() }
                draggable={false}
            >
            <Formik
                initialValues={handleInitData()}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={ValidationCompany}
            >
                {() => (
                    <Form className='forms' style={{ width: '100%' }}>
                        <div className='text-grey' style={{padding:'60px',paddingTop:'10px', paddingBottom:'0px'}}>
                            <CustomFormLoginInput
                                placeholder='Nombre'
                                name='nombre'
                                type='text'/>
                        </div>
                        <div className='field my-5 flex justify-content-center'>
                            <Button
                                className='login-btn'
                                label="Registrar Compañía"
                                rounded
                                severity="warning"
                                type="submit"
                            />
                        </div>
                    </Form>
                )}
            </Formik>
            </Dialog>
        </>
    )
}