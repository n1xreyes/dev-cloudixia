import {Injectable} from '@angular/core';
import {buildFileUploadUrl, buildFormData} from './image-upload.effects';
import {HttpClient} from '@angular/common/http';
import {FileMetadataModel} from '../../shared/models/file-metadata.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ImageUploadService{

    constructor(
        private http: HttpClient
    ) {}

    uploadImage(file: File, fileMetadata: FileMetadataModel): Observable<object> {
        return this.http.post(buildFileUploadUrl(), buildFormData(file, fileMetadata));
    }
}
