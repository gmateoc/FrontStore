import * as Yup from 'yup';

export const ValidationGameCompany = Yup.object({

    nombre: Yup.string()
        .matches(/[^\d]+/, 'El nombre no puede contener solo números')
        .matches(/^(?![\d\s]+$)(?![^\w\s]+$).*/, 'El nombre no puede contener solo caracteres especiales')
        .required('El nombre es requerido'),

    stock: Yup.number()
        .integer('El stock debe ser un número entero')
        .required('El stock es requerido'),

    price: Yup.number()
        .required('El precio es requerido'),

    company_id: Yup.number()
        .required('La compañía es requerida'),
    
});