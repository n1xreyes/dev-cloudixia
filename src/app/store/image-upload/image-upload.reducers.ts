import * as fromActions from 'src/app/store/image-upload/image-upload.actions';
import {HttpErrorResponse} from '@angular/common/http';

export interface ImageUploadState {
    isRequesting: boolean;
    url?: string;
    error?: HttpErrorResponse;
}

export const INITIAL_STATE: ImageUploadState = {
    isRequesting: false,
};

export function imageUploadReducer(
    state: ImageUploadState = INITIAL_STATE, action: fromActions.ActionTypes): ImageUploadState {
    switch (action.type) {
        case fromActions.UPLOAD_IMAGE_REQUEST, fromActions.DELETE_IMAGE_REQUEST:
            return {
                ...state,
                isRequesting: true,
            };
        case fromActions.UPLOAD_IMAGE_RESPONSE:
            return {
                ...state,
                isRequesting: false,
                url: action.payload,
            };
        case fromActions.UPLOAD_IMAGE_ERROR, fromActions.DELETE_IMAGE_ERROR:
            return {
                ...state,
                isRequesting: false,
                error: action.error,
            };
        case fromActions.DELETE_IMAGE_RESPONSE:
            return {
                ...state,
                isRequesting: false,
            };
        default:
            return state;
    }
}
