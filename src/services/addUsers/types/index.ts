
export interface AddUserRequest {
	name: string;
  lastName: string;
  email: string;
  role: string;
  API_KEY: string;
  uid_client?: string;
}

export interface AddUserResponse {
	status: 'success' | 'error';
}
