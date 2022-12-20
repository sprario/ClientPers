
export interface AddUserRequest {
	name: string;
  lastName: string;
  email: string;
  role: string;
}

export interface AddUserResponse {
	status: 'success' | 'error';
}
