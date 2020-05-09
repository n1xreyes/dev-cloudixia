import * as fromActions from 'src/app/store/image-upload/image-upload.actions';
import {HttpErrorResponse} from '@angular/common/http';

export interface ImageUploadState {
    isRequesting: boolean;
    error?: HttpErrorResponse;
}

export const INITIAL_STATE: ImageUploadState = {
    isRequesting: false,
};

export function imageUploadReducer(
    state: ImageUploadState = INITIAL_STATE, action: fromActions.ActionTypes): ImageUploadState {
    switch (action.type) {
        case fromActions.UPLOAD_IMAGE_REQUEST:
            return {
                ...state,
                isRequesting: true,
            };
        case fromActions.UPLOAD_IMAGE_RESPONSE:
            return {
                ...state,
                isRequesting: false,
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
