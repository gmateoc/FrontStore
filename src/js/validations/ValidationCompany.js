import * as Yup from 'yup';

export const ValidationCompany = Yup.object({

    nombre: Yup.string()
        .matches(/[^\d]+/, 'El nombre no puede contener solo números')
        .matches(/^(?![\d\s]+$)(?![^\w\s]+$).*/, 'El nombre no puede contener solo caracteres especiales')
        .required('El nombre es requerido'),
    
});