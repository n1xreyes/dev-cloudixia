import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as fromActions from 'src/app/store/image-upload/image-upload.actions';
import { ToastrService } from 'ngx-toastr';
import {Action} from '@ngrx/store';
import {ImageUploadService} from './image-upload.service';

@Injectable()
export class ImageUploadEffects {

    // @ts-ignore
    @Effect()
    uploadRequest: Observable<Action> = this.actions.pipe(
        ofType(fromActions.UPLOAD_IMAGE_REQUEST),
        map((action: fromActions.UploadImageRequest) => action),
        switchMap((request: fromActions.UploadImageRequest) =>
            this.imageUploadService.uploadImage(request.file, request.fileMetadata).pipe(
                map((res: any) => {
                    this.toastr.success('', 'Upload success');
                    return new fromActions.UploadImageResponse(res);
                }),
                catchError(error => {
                    this.toastr.error('', 'Upload failed');
                    return of(new fromActions.UploadImageError(error));
                })
            )
        )
    );

    constructor(private actions: Actions, private toastr: ToastrService, private imageUploadService: ImageUploadService) {}
}
