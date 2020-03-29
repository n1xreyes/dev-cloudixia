import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MarketplaceState } from './marketplace.state';

export const getProjectsState = createFeatureSelector<MarketplaceState>('marketplace');

export const getProjects = createSelector(
  getProjectsState,
  projects => projects.projects
);

export const getAllLoaded = createSelector(
  getProjectsState,
  projects => projects.loading
);

export const getError = createSelector(
  getProjectsState,
  projects => projects.error
);
