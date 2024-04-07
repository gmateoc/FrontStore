import axios from 'axios';
import {useMutation} from '@tanstack/react-query';
import {SwalReact} from "../../utils/SwalConfig";

export const usePostCompaniesMutation = () => {
    
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
            if(response.data.success || response.status === 201){
                SwalReact.fire({
                    icon: 'success',
                    title: '¡Companía creada!',
                    text: 'Se ha creado con éxito',
                    showConfirmButton: false,
                    timer: 2000,
                    heightAuto: false
                }).then(() => {
                    //window.location.replace(`/admin/companies/${userId}/${token}`);                    
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