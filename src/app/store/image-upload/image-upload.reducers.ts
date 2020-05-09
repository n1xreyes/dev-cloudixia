import * as fromActions from 'src/app/store/image-upload/image-upload.actions';
import {HttpErrorResponse} from '@angular/common/http';

export interface HttpState {
    isRequesting: boolean;
    error?: HttpErrorResponse;
}

export interface ImageUploadState extends HttpState {
    progress: number;
}

export const INITIAL_STATE: ImageUploadState = {
    isRequesting: false,
    progress: 0,
};

export function imageUploadReducer(
    state: ImageUploadState = INITIAL_STATE, action: fromActions.ActionTypes): ImageUploadState {
    switch (action.type) {
        case fromActions.UPLOAD_IMAGE_REQUEST:
            return {
                ...state,
                isRequesting: true,
                progress: 0,
            };
        case fromActions.UPLOAD_IMAGE_PROGRESS:
            return {
                ...state,
                isRequesting: true,
                progress: action.percent,
            };
        case fromActions.UPLOAD_IMAGE_RESPONSE:
            return {
                ...state,
                isRequesting: false,
                progress: 100,
            };
        case fromActions.UPLOAD_IMAGE_ERROR:
            return {
                ...state,
                isRequesting: false,
                error: action.error,
            };
        default:
            return state;
    }
}
