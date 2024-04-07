import { Button } from 'primereact/button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CustomFormLoginInput } from '../../formik/CustomFormInput';
import { useParams } from 'react-router-dom';
import { ValidationGameCompany } from '../../validations/ValidationGameCompany';
import { useFetchQuery } from '../../hooks/commons/useFetchQuery';
import { Dialog } from 'primereact/dialog';
import { useGamesForm } from '../../hooks/Games/useGamesForm';
import { dialogConfig } from '../../utils/DialogConfig';

export const GamesForm = ({handleReloadCards = () =>{} }) => {

    const {showDialog,
        setShowDialog,
        handleInitData,
        handleHeader,
        handleSubmit,} = useGamesForm(null,handleReloadCards);

    const id = useParams();

    const companiesQuery = useFetchQuery({url: 'http://127.0.0.1:8000/api/companies/all', params: '', token: id.token, queryName: 'companies'});
        
    return(
        <>
            {
                <Button
                className='rounded-circle bg-none border-0 p-10 mx-10'
                onClick={() => setShowDialog(true)}
                >
                    Agregar nuevo juego
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
                validationSchema={ValidationGameCompany}
            >
                {() => (
                    <Form className='forms' style={{ width: '100%' }}>
                        <div className='text-grey' style={{padding:'60px',paddingTop:'10px', paddingBottom:'0px'}}>
                            <CustomFormLoginInput
                                placeholder='Nombre'
                                name='nombre'
                                type='text'/>
                            <CustomFormLoginInput
                                placeholder='Stock'
                                name='stock'
                                type='number'/>
                            <CustomFormLoginInput
                                placeholder='Precio'
                                name='price'
                                type='number'/>
                            <span className='mr-3 h6'>Compañía</span>
                            <div className="field">
                                <Field name='company_id' as='select'>
                                    <option value=''>Select a company</option>
                                    {Array.isArray(companiesQuery?.data?.data) &&
                                        companiesQuery.data.data.map((company) => (
                                        <option key={company.id} value={company.id}>
                                            {company.nombre}
                                        </option>
                                        ))}
                                </Field>
                                <br />
                                <ErrorMessage name='company_id' component='span' style={{color:'red'}}/>
                            </div>
                        </div>
                        <div className='field my-5 flex justify-content-center'>
                            <Button
                                className='login-btn'
                                label="Registrar Juego"
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