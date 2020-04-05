import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MarketplaceState } from './marketplace.state';

export const getProjectsState = createFeatureSelector<MarketplaceState>('marketplace');

export const getProjects = createSelector(
  getProjectsState,
  marketplace => marketplace.projects
);

export const getAllLoaded = createSelector(
  getProjectsState,
  marketplace => marketplace.loading
);

export const getError = createSelector(
  getProjectsState,
  marketplace => marketplace.error
);
