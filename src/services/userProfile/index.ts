//import { fetchJson } from '~/utils/fetch/core';
import { API_URL } from '../../constants';
//import { FetchServiceEndpoint } from '~/types/service';
import { UserProfile } from '../../types/domain/userProfile';
import { UserProfileServiceResponse } from './types';

const SERVICE_BASE_URL = `${API_URL}/users`;

function mapFetchResponse(userProfileServiceResponse: UserProfileServiceResponse): UserProfile {
  return { ...userProfileServiceResponse };
}

export function getUserProfile() {
    return null
}

// export function getUserProfile(): FetchServiceEndpoint<UserProfile> {
//   const url = `${SERVICE_BASE_URL}`;

//   return {
//     keys: ['userProfile'],
//     fetcher: (options) =>
//       fetchJson<UserProfileServiceResponse>({ url, method: 'GET', ...options }).then(mapFetchResponse),
//   };
// }
