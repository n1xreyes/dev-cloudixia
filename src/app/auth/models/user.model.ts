export interface User {
  uid: string;
  displayName: string;
  email: string;
  providerId: string;
  photoUrl: string;
  phoneNumber?: string;
  country?: string;
  province?: string;
  city?: string;
  street?: string;
  isNewUser?: boolean;
  isAdmin?: boolean;
  isOnline?: boolean;
}
