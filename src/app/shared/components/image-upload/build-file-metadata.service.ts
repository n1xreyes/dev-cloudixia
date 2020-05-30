import {Injectable} from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';
import {generateUID} from '../../../../utils/uid-generator';
import {User} from 'firebase';
import {FileFolderName} from '../../models/file-metadata.model';

// import {generateUID} from '../../../../utils/uid-generator';

@Injectable({
    providedIn: 'root'
})
export class BuildFileMetadataService {
    authToken: string;
    user: User;

    constructor(private authService: AuthService) {
        this.authService.getAuthState().subscribe((user) => {
            if (user) {
                this.user = user;
                user.getIdToken().then(idToken => {
                    this.authToken = idToken;
                });
            }
        });
    }

    buildFileMetadata(folderName: FileFolderName, metaId?: string) {
        let fileName = '';

        switch (folderName) {
            case FileFolderName.PROFILE: {
                fileName = this.getProfilePhotoFileName();
                break;
            }
            case FileFolderName.LISTING: {
                if (metaId != null) {
                    fileName = this.getListingPhotoFileName(metaId);
                }
                break;
            }
            case FileFolderName.CATEGORY: {
                if (metaId != null) {
                    fileName = this.getCategoryPhotoFileName(metaId);
                }
                break;
            }

        }

        const fileMetadata = {
            fileName: fileName,
            token: this.authToken
        };

        return fileMetadata;
    }

    getListingPhotoFileName(listingId: string) {
        return this.user.uid + '/listing/' + listingId + generateUID() + '.jpg';
    }

    getProfilePhotoFileName() {
        return this.user.uid + '/profile/' + this.user.uid + generateUID() + '.jpg';
    }

    getCategoryPhotoFileName(categoryId: string) {
        return this.user.uid + '/category/' + categoryId + generateUID() + '.jpg';
    }
}
