import { useContext, useEffect, useMemo } from 'react';
import { useQuery as useQueryTanStack, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';

import { FetchServiceEndpoint, FetchError } from '../../types/service';
import { AppContext, AuthContext } from '../../context';
import { AppError } from '../../types/core';

// interface UseQueryOptionsProps<T> extends Omit<UseQueryOptions<T, FetchError<T>>, 'onSettled'> {
//   showLoadingBackdrop?: boolean;
//   handleErrors?: boolean;
// }

// function useQuery<T, P>(
//   fetch: (params?: P) => FetchServiceEndpoint<T>,
//   config?: UseQueryOptionsProps<T>,
// ): UseQueryResult<T, FetchError<T>> {
//   const { accessToken } = useContext(AuthContext);
//   const { loading, setLoading, setError } = useContext(AppContext);
//   const { keys, fetcher } = useMemo(() => {
//     return fetch();
//   }, [fetch]);

//   const { showLoadingBackdrop, handleErrors, ...useQueryConfig } = useMemo(
//     () => ({
//       showLoadingBackdrop: false,
//       handleErrors: true,
//       onSettled: () => {
//         if (showLoadingBackdrop) {
//           setLoading(true);
//         }
//       },
//       ...config,
//     }),
//     [config, loading],
//   );

//   const useQueryResult = useQueryTanStack(
//     keys,
//     () => {
//       return fetcher({ accessToken });
//     },
//     useQueryConfig,
//   );

//   useEffect(() => {
//     if (handleErrors && useQueryResult.errorUpdatedAt) {
//       if (useQueryResult.error) {
//         setError({ fetchError: useQueryResult.error });
//       } else {
//         setError({} as AppError);
//       }
//     }
//   }, [useQueryResult.error, useQueryResult.errorUpdatedAt, useQueryResult.refetch, handleErrors, setError]);

//   return useQueryResult;
// }

// // export { UseBFFQueryOptions };
// export default useQuery;
