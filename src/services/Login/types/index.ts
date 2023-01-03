import { UserProfile } from '../../../types/domain/userProfile';

export interface LoginRequest {
	email: string;
	password: string;
};

export interface LoginResponse {
	data: any;
	accessToken: string;
	userProfile: UserProfile;
};
