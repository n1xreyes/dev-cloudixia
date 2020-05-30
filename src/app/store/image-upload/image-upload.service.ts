import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileMetadataModel } from '../../shared/models/file-metadata.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ImageUploadService {

    constructor(
        private http: HttpClient
    ) {}

    uploadImage(file: File, fileMetadata: FileMetadataModel): Observable<object> {
        return this.http.post(this.buildFileUploadUrl(), this.buildFormData(file, fileMetadata));
    }

    buildFileUploadUrl() {
        return `${environment.uploadImage.apiURL}/upload`;
    }

    buildFormData(file: File, fileMeta: FileMetadataModel) {
        const formData: FormData = new FormData();
        formData.append('file', file);
        formData.append('Metadata', JSON.stringify(fileMeta));
        return formData;
    }
}
