import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import {FileMetadataModel} from '../../shared/models/file-metadata.model';

export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';
export const UPLOAD_IMAGE_RESPONSE = 'UPLOAD_IMAGE_RESPONSE';
export const UPLOAD_IMAGE_ERROR = 'UPLOAD_IMAGE_ERROR';

export const DELETE_IMAGE_REQUEST = 'DELETE_IMAGE_REQUEST';
export const DELETE_IMAGE_RESPONSE = 'DELETE_IMAGE_RESPONSE';
export const DELETE_IMAGE_ERROR = 'DELETE_IMAGE_ERROR';

export class UploadImageRequest implements Action {
    readonly type = UPLOAD_IMAGE_REQUEST;
    constructor(public file: File, public fileMetadata: FileMetadataModel) { }
}

export class UploadImageResponse implements Action {
    readonly type = UPLOAD_IMAGE_RESPONSE;
    constructor(public payload: any) { }
}

export class UploadImageError implements Action {
    readonly type = UPLOAD_IMAGE_ERROR;
    constructor(public error: HttpErrorResponse) { }
}

export type ActionTypes =
    | UploadImageRequest
    | UploadImageResponse
    | UploadImageError;
