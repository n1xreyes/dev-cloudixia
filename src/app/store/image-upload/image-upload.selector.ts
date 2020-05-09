import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ImageUploadState} from './image-upload.reducers';

export const getImageUploadFeatureState = createFeatureSelector<ImageUploadState>('imageUpload');

export const getImageUploadProgress = createSelector(
    getImageUploadFeatureState,
    state => state.progress
);
