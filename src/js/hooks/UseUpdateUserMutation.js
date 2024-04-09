import axios from 'axios';
import {useMutation} from '@tanstack/react-query';
import {SwalReact} from "../utils/SwalConfig";
export const useUpdateUserMutation = () => {
    
    const mutation = useMutation({
        mutationFn: ({url, data,token}) => {
            return axios.put(url, data,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        },
        onError: (error) => {
            console.error('Error en la petición:', error);
            SwalReact.fire({
                icon: 'error',
                title: 'Error al actualizar',
            })
        },
        onSuccess: (response) => {
            if(response.data.success){
                SwalReact.fire({
                    icon: 'success',
                    title: `¡Éxito ${response.data.user.name}!`,
                    text: 'Se realizó el cambio',
                    showConfirmButton: false,
                    timer: 2000,
                    heightAuto: false
                }).then(() => {                
                })
            }else{
                SwalReact.fire({
                    icon: 'error',
                    title: '¡Error al actualizar!',
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