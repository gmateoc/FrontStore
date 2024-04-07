import axios from 'axios';
import {useQuery} from '@tanstack/react-query';

const getFetchData = async (url, params,token) => {
    const {data} = await axios.get(url, {
        params,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export const useFetchQuery = ({url = '', params = {}, token, queryName = ''}) => {
    return useQuery({
        queryKey: [queryName],
        queryFn: () => getFetchData(url, params, token)
    });
}
