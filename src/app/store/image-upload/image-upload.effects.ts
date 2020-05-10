import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as fromActions from 'src/app/store/image-upload/image-upload.actions';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {FileMetadataModel} from '../../shared/models/file-metadata.model';

export function buildFileUploadUrl() {
    return `${environment.uploadImage.apiURL}/upload`;
}

export function buildFormData(file: File, fileMeta: FileMetadataModel) {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('Metadata', JSON.stringify(fileMeta));
    return formData;
}

@Injectable()
export class ImageUploadEffects {

    // @ts-ignore
    @Effect()
    uploadRequest: Observable<Action> = this.actions.pipe(
        ofType(fromActions.UPLOAD_IMAGE_REQUEST),
        switchMap((request: fromActions.UploadImageRequest) =>
            this.http.post(buildFileUploadUrl(), buildFormData(request.file, request.fileMetadata),
            { }).pipe(
                map((res: any) => {
                    this.toastr.success('Your file was uploaded', 'Upload success');
                    return new fromActions.UploadImageResponse(res);
                }),
                catchError(error => {
                    this.toastr.error(error, 'Upload failed');
                    return of(new fromActions.UploadImageError(error));
                })
            )
        )
    );

    // @Effect()
    // uploadResponse: Observable<Action> = this.actions.pipe(
    //     ofType(fromActions.UPLOAD_IMAGE_RESPONSE),
    //     map((res: any) => {
    //         this.toastr.success('Your file was uploaded', 'Upload success');
    //         return new fromActions.UploadImageResponse(res);
    //     }),
    //     catchError(error => {
    //         this.toastr.error(error, 'Upload failed');
    //         return of(new fromActions.UploadImageError(error));
    //     })
    // );

    constructor(private actions: Actions, private http: HttpClient, private toastr: ToastrService) { }
}
