export interface User {
  uid: string;
  email: string;
  firstName?: string;
  lastName?: string;
  street?: string;
  city?: string;
  poBox?: string;
  country?: string;
  isSeller?: boolean;
  isAdmin?: boolean;
  isOnline?: boolean;
  providerId: string;
  isNewUser?: boolean;
  userProfile: UserProfile;
}

export interface UserProfile {
  photoUrl: string;
  displayName: string;
  listings?: object;
}