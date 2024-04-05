import axios from 'axios';
import {useMutation} from '@tanstack/react-query';
import {SwalReact} from "../utils/SwalConfig";

export const useRegisterMutation = () => {
    
    const mutation = useMutation({
        mutationFn: ({url, data}) => {
            return axios.post(url, data);
        },
        onError: (error) => {
            console.error('Error en la petición:', error);
            SwalReact.fire({
                icon: 'error',
                title: 'Error al registrarse, correo existente',
            })
        },
        onSuccess: (response) => {
            console.log(response);
            if(response.status===200){
                SwalReact.fire({
                    icon: 'success',
                    title: '¡Registrado!',
                    text: 'Ahora se puede loguear',
                    showConfirmButton: false,
                    timer: 2000,
                    heightAuto: false
                }).then(() => {
                    window.location.replace('/admin/login');
                })
            }else{
                SwalReact.fire({
                    icon: 'error',
                    title: '¡Correo existente!',
                    text: response.data.message,
                    showConfirmButton: false,
                    timer: 2000,
                    heightAuto: false
                }).then(() => {
                })
            }
        },
    });

    return mutation;
}