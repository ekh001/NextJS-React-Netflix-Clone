// SWR is similar to React Query, but you don't need redux
import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher)

    return {
        data,
        error,
        isLoading,
        mutate
    }
};   

export default useCurrentUser;