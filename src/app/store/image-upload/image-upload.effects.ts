import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as fromActions from 'src/app/store/image-upload/image-upload.actions';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
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
export class FileUploadEffects {

    // @ts-ignore
    @Effect()
    uploadRequest: Observable<Action> = this.actions.pipe(
        ofType(fromActions.UPLOAD_IMAGE_REQUEST),
        switchMap((request: fromActions.UploadImageRequest) =>
            this.http.post(buildFileUploadUrl(), buildFormData(request.file), { reportProgress: true, observe: 'events' }).pipe(
                map((event: HttpEvent<any>) => {
                    switch (event.type) {
                        case HttpEventType.Sent:
                            return new fromActions.UploadImageProgress(1);
                        case HttpEventType.UploadProgress:
                            // @ts-ignore
                            return new fromActions.UploadImageProgress(Math.round(100 * event.loaded / event.total));
                        case HttpEventType.Response:
                            return new fromActions.UploadImageResponse();
                        default:
                            return new fromActions.UploadImageProgress(0);
                    }
                }),
                catchError(error => of(new fromActions.UploadImageError(error))),
            )
        )
    );

    @Effect()
    uploadResponse: Observable<Action> = this.actions.pipe(
        ofType(fromActions.UPLOAD_IMAGE_RESPONSE),
        map(() => {
            return this.toastr.success('Your file was uploaded', 'Upload success');
            })
    );

    @Effect()
    uploadError: Observable<Action> = this.actions.pipe(
        ofType(fromActions.UPLOAD_IMAGE_ERROR),
        map(() => this.toastr.error('Something went wrong', 'Upload failed'))
    );

    constructor(private actions: Actions, private http: HttpClient, private toastr: ToastrService) { }
}
