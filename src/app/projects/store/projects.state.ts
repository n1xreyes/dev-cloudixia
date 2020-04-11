import { Listing } from 'src/app/shared/models/listing.model';

export interface ProjectsState {
  projects: Listing[] | null;
  loading: boolean;
  error: any;
}

export const projectsInitialState: ProjectsState = {
  projects: null,
  loading: false,
  error: null
};
