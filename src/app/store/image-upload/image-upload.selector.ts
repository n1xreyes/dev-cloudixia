import {createFeatureSelector} from '@ngrx/store';
import {ImageUploadState} from './image-upload.reducers';

export const getImageUploadFeatureState = createFeatureSelector<ImageUploadState>('imageUpload');
