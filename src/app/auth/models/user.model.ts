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

  // redundand?
  pendingListings: string[];
}

export interface UserProfile {
  uid: string;
  photoUrl: string;
  displayName: string;

  // redundand?
  listings?: string[];
}
