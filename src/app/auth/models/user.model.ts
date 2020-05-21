import { Listing } from 'src/app/shared/models/listing.model';

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

  pendingListings: Listing[];
}

export interface UserProfile {
  photoUrl: string;
  displayName: string;
  listings?: object;
}
