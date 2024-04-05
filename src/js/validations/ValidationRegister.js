import * as Yup from 'yup';

export const ValidationRegister = Yup.object({

    name: Yup.string()
        .matches(/[^\d]+/, 'El nombre no puede contener solo números')
        .matches(/^[^\d]+$/, 'El nombre no puede contener números')
        .matches(/^(?![\d\s]+$)(?![^\w\s]+$).*/, 'El nombre no puede contener solo caracteres especiales')
        .matches(/^[a-zA-Z\s]+$/, 'El nombre solo puede contener letras y espacios')
        .required('El nombre es requerido'),

    email: Yup.string()
        .email('El correo debe tener un formato valido')
        .required('El correo es requerido'),

    password: Yup.string()
        .min(8, 'La contraseña debe contener al menos 8 caracteres')
        .required('La contraseña es requerida'),

    confirmPassword: Yup.string()
        .required('Debes de confirmar la contraseña')
        .min(8, 'La contraseña debe contener al menos 8 caracteres')
        .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir'),
    
});