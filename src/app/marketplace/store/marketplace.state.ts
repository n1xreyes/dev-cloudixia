import { Project } from '../../projects/models/project.model';

export interface MarketplaceState {
    projects: Project[] | null;
    loading: boolean;
    error: any;
  }
  
  export const marketplaceInitialState: MarketplaceState = {
    projects: null,
    loading: false,
    error: null
  };
  