import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProjectsState } from './projects.state';

export const getProjectsState = createFeatureSelector<ProjectsState>('projects');

export const getProjects = createSelector(
  getProjectsState,
  projects => projects.projects
);

export const getAllLoaded = createSelector(
  getProjectsState,
  projects => projects.loading
);

export const getPendingListings = createSelector(
  getProjectsState,
  projects => projects.pendingListings
);

export const getPendingLoaded = createSelector(
  getProjectsState,
  projects => projects.pendingLoading
);

export const getError = createSelector(
  getProjectsState,
  projects => projects.error
);
