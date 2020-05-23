import {Injectable} from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';
import {generateUID} from '../../../../utils/uid-generator';
// import {generateUID} from '../../../../utils/uid-generator';

@Injectable({
    providedIn: 'root'
})
export class BuildFileMetadataService {
    authToken: string;

    constructor(private authService: AuthService) {
        this.authService.getAuthState().subscribe((user) => {
            if (user) {
                user.getIdToken().then(idToken => {
                    this.authToken = idToken;
                });
            }
        });
    }

    buildFileMetadata(userId: any, listingId?: string) {
        let fileName = '';

        if (listingId) {
            // tslint:disable-next-line:max-line-length
            fileName = this.getListingPhotoFileName(userId, listingId);
        } else {
            // no listing object, so this must be profile
            fileName = this.getProfilePhotoFileName(userId);
        }

        const fileMetadata = {
            fileName: fileName,
            token: this.authToken
        };

        return fileMetadata;
    }

    getListingPhotoFileName(userId: string, listingId: string) {
        return userId + '/listing/' + listingId + generateUID() + '.jpg';
    }

    getProfilePhotoFileName(userId: string) {
        return userId + '/profile/' + userId + generateUID() + '.jpg';
    }
}
