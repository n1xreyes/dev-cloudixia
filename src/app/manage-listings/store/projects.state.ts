import { Listing } from 'src/app/shared/models/listing.model';

export interface ProjectsState {
  projects: Listing[] | null;
  loading: boolean;
  pendingListings: Listing[] | null;
  pendingLoading: boolean;
  error: any;
}

export const projectsInitialState: ProjectsState = {
  projects: null,
  loading: false,
  pendingListings: null,
  pendingLoading: false,
  error: null
};
