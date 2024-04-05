import * as Yup from 'yup';

export const ValidationLogin = Yup.object({

    email: Yup.string()
        .email('El correo debe tener un formato valido')
        .required('El correo es requerido'),

    password: Yup.string().required('La contraseña es requerida'),
    
});