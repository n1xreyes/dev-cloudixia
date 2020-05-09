import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as fromActions from 'src/app/store/image-upload/image-upload.actions';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

export function buildFileUploadUrl() {
    return `${environment.uploadImage.apiURL}/upload`;
}

export function buildFormData(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return formData;
}

@Injectable()
export class ImageUploadEffects {

    // @ts-ignore
    @Effect()
    uploadRequest: Observable<Action> = this.actions.pipe(
        ofType(fromActions.UPLOAD_IMAGE_REQUEST),
        switchMap((request: fromActions.UploadImageRequest) =>
            this.http.post(buildFileUploadUrl(), buildFormData(request.file),
            { headers: new HttpHeaders().set('Content-Type', 'multipart/form-data')}).pipe(
                map(() => {
                    return new fromActions.UploadImageResponse();
                }),
                catchError(error => of(new fromActions.UploadImageError(error))),
            )
        )
    );

    @Effect()
    uploadResponse: Observable<Action> = this.actions.pipe(
        ofType(fromActions.UPLOAD_IMAGE_RESPONSE),
        map(() => {
            this.toastr.success('Your file was uploaded', 'Upload success');
            return new fromActions.UploadImageResponse();
        })
    );

    @Effect()
    uploadError: Observable<Action> = this.actions.pipe(
        ofType(fromActions.UPLOAD_IMAGE_ERROR),
        map((err: HttpErrorResponse) => {
            this.toastr.error('Something went wrong', 'Upload failed');
            return new fromActions.UploadImageError(err);
        })
    );

    constructor(private actions: Actions, private http: HttpClient, private toastr: ToastrService) { }
}
