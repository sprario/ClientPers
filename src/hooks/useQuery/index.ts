// import { useContext, useEffect, useMemo } from 'react';
// import {
// 	useQuery as useQueryTanStack,
// 	UseQueryOptions as UseQueryOptionsTanStack,
// 	UseQueryResult,
// } from 'react-query';

// import { FetchServiceEndpoint, FetchError } from '../../types/service';
// import { AppContext, AuthContext } from '../../context';
// import { AppError } from '../../types/core';

// interface UseQueryOptionsProps<T> extends UseQueryOptionsTanStack<T, FetchError<T>> {
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

//   const { showLoadingBackdrop, handleErrors, ...useQueryConfig }: UseQueryOptionsProps<T> = useMemo(
//     () => ({
//       showLoadingBackdrop: false,
//       handleErrors: true,
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

// export default useQuery;
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-module-boundary-types
export const test = () => null;
