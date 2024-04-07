import axios from 'axios';
import {useMutation} from '@tanstack/react-query';
import {SwalReact} from "../../utils/SwalConfig";

export const usePostMutation = () => {
    
    const mutation = useMutation({
        mutationFn: ({url, data}) => {
            return axios.post(url, data);
        },
        onError: (error) => {
            console.error('Error en la petición:', error);
            SwalReact.fire({
                icon: 'error',
                title: 'Error al iniciar sesión',
            })
        },
        onSuccess: (response) => {
            const userId = response.data.user.id;
            const token = response.data.access_token;
            if(response.data.success){
                SwalReact.fire({
                    icon: 'success',
                    title: '¡Acceso concedido!',
                    text: 'Ha iniciado sesión con éxito',
                    showConfirmButton: false,
                    timer: 2000,
                    heightAuto: false
                }).then(() => {
                    window.location.replace(`/admin/catalog/${userId}/${token}`);                    
                })
            }else{
                SwalReact.fire({
                    icon: 'error',
                    title: '¡Acceso denegado!',
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