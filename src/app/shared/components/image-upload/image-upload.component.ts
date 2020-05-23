import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {AppState} from '../../../reducers';
import {select, Store} from '@ngrx/store';
import {ImageUploadState} from '../../../store/image-upload/image-upload.reducers';
import {UploadImageRequest} from '../../../store/image-upload/image-upload.actions';
import {User} from '../../../auth/models/user.model';
import {FileMetadataModel} from '../../models/file-metadata.model';
import {Listing} from '../../models/listing.model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AuthService} from '../../../auth/services/auth.service';
import {BuildFileMetadataService} from './build-file-metadata.service';


interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit, OnDestroy {

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  // tslint:disable-next-line:max-line-length
  readonly acceptedFileType: string = '.jpg,.jpeg,.tiff,.gif,.png';
  readonly maxFileSize = 10000000; // 10MB

  @Input() userInfo: User;
  @Input() listingInfo: Listing;
  @Input() isProfilePic: boolean;
  @Output() photoUrlGenerated: EventEmitter<any> = new EventEmitter();
  @Output() photoSelected: EventEmitter<any> = new EventEmitter();
  selectedFile: File;
  fileMetaData: FileMetadataModel;
  isRequesting: boolean;
  fileSizeError = false;
  destroyed: Subject<boolean> = new Subject<boolean>();
  authToken: string;
  tempUrl: any;

  constructor(private store: Store<AppState>,
              private buildFileMetaDataService: BuildFileMetadataService,
              private authService: AuthService) {}

  ngOnInit() {
    this.authService.getAuthState().subscribe((user) => {
      if (user) {
        user.getIdToken().then(idToken => {
          this.authToken = idToken;
        });
      }
    });

    this.store.pipe(
        select('imageUpload'),
        takeUntil(this.destroyed)
    ).subscribe((state: ImageUploadState) => {
      if (state) {
        this.isRequesting = state.isRequesting;
        if (!this.isRequesting || state.error) {
          this.clearSelection();
        }

        if (state.url) {
          // @ts-ignore
          this.urlGenerated(state.url.URL);
        }
      }
    });
  }

  clearSelection() {
    // @ts-ignore
    this.selectedFile = undefined;
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
    this.fileSizeError = false;
  }

  fileSelectionChanged(event: HTMLInputEvent) {
    // @ts-ignore
    if (event.target.files[0].size > this.maxFileSize) {
      this.fileSizeError = true;
    } else {
      this.fileSizeError = false;
      // @ts-ignore
      this.selectedFile = event.target.files[0];
    }

    if (!this.isProfilePic) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.tempUrl = event.target.result;
      };

      reader.onerror = (event: any) => {
        console.log('File could not be read: ' + event.target.error.code);
      };

      reader.readAsDataURL(this.selectedFile);
      this.photoSelected.emit(this.selectedFile);
    }
  }

  formatBytes(bytes: number, decimalPlaces: number = 0): string {
    if (bytes < 1) {
      return '0B';
    }
    decimalPlaces = decimalPlaces < 0 ? 0 : decimalPlaces;
    const unit = ['B', 'kB', 'MB'];
    const scale = 1000;
    const orderOfMagnitude = Math.floor(Math.log(bytes) / Math.log(scale));
    return parseFloat((bytes / Math.pow(scale, orderOfMagnitude)).toFixed(decimalPlaces)) + unit[orderOfMagnitude];
  }

  uploadFile() {
    this.buildFileMetadata();
    this.store.dispatch(new UploadImageRequest(this.selectedFile, this.fileMetaData));
  }

  buildFileMetadata() {
    // let fileName: string;
    // const fileExt = this.selectedFile.name.split('.').pop();
    // if (isProfilePic) {
    //   fileName = this.userInfo.uid + '/profile/profile_' + this.userInfo.uid + '.' + fileExt;
    // } else {
    //   if (this.listingInfo && this.listingInfo.uid) {
    //     // tslint:disable-next-line:max-line-length
    //     fileName = this.userInfo.uid + '/listing/' + this.listingInfo.uid + '/' + this.listingInfo.uid + '_' + generateUID() + '.' + fileExt;
    //   } else {
    //     // new project so no listing ID generated at this point
    //     fileName = this.userInfo.uid + '/listing/listing_' + this.userInfo.uid + '_' + generateUID() + '.' + fileExt;
    //   }
    // }
    // // tslint:disable-next-line:no-unused-expression
    // const fileMetadata: FileMetadataModel = {
    //   fileName: fileName,
    //   token: this.authToken
    // };
    //
    // // @ts-ignore
    // return fileMetadata;

    // this.fileMetaData = this.isProfilePic ?
    //     this.buildFileMetaDataService.buildFileMetadata(this.userInfo.uid, this.selectedFile) :
    //     this.buildFileMetaDataService.buildFileMetadata(this.userInfo.uid, this.selectedFile, this.listingInfo.uid);
    let meta;
    if (this.isProfilePic) {
      meta = this.buildFileMetaDataService.buildFileMetadata(this.userInfo.uid);
    } else {
      meta = this.buildFileMetaDataService.buildFileMetadata(this.userInfo.uid, this.listingInfo.uid);
    }
    this.fileMetaData = {
      fileName: meta.fileName,
      token: meta.token
    }
  }

  urlGenerated(urlGen: string) {
    this.photoUrlGenerated.emit(urlGen);
  }

  ngOnDestroy(): void {
    this.destroyed.next(true);
  }

}
