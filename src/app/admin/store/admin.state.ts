export interface AdminState {
    usersList: any[];
    usersListLoading: boolean;
    pendingListings: any[],
    pendingListingLoading: boolean;
    error: any;
}

export const adminInitialState: AdminState = {
    usersList: [],
    usersListLoading: false,
    pendingListings: [],
    pendingListingLoading: false,
    error: null
};
