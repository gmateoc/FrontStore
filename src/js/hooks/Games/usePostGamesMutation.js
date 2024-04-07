import axios from 'axios';
import {useMutation} from '@tanstack/react-query';
import {SwalReact} from "../../utils/SwalConfig";

export const usePostGamesMutation = () => {
    
    const mutation = useMutation({
        mutationFn: ({url, data,token}) => {
            return axios.post(url, data,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        },
        onError: (error) => {
            console.error('Error en la petición:', error);
            SwalReact.fire({
                icon: 'error',
                title: 'Error al registrar',
            })
        },
        onSuccess: (response) => {
            if(response.data.success){
                SwalReact.fire({
                    icon: 'success',
                    title: '¡Juego creado!',
                    text: 'Se ha creado con éxito',
                    showConfirmButton: false,
                    timer: 2000,
                    heightAuto: false
                }).then(() => {
                    //window.location.replace(`/admin/catalog/${userId}/${token}`);                    
                })
            }else{
                SwalReact.fire({
                    icon: 'error',
                    title: '¡Error al registrar!',
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