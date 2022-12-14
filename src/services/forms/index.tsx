import { fetchJson } from '../../utils/fetch';
import { API_URL } from '../../constants';
import { FetchServiceEndpoint } from '../../types/service';
import { FormsResponseSuccess, FormsRequest } from './types';

const SERVICE_BASE_URL = `${API_URL}/forms/`;


export const formRequest = ({user, idForm}:FormsRequest): FetchServiceEndpoint<FormsResponseSuccess> => {
  const url = idForm ? `${SERVICE_BASE_URL}${user}/${idForm}` : `${SERVICE_BASE_URL}${user}/`;

  return {
    keys: ['forms-request'],
    fetcher: (options) =>
      fetchJson<FormsResponseSuccess>({
        url,
        method: 'GET',
        ...options,
      }).then((res) => {
        return res;
      }),
  };
};
