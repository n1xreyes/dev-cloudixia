import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AppState} from '../../../reducers';
import {select, Store} from '@ngrx/store';
import {ImageUploadState} from '../../../store/image-upload/image-upload.reducers';
import {UploadImageRequest} from '../../../store/image-upload/image-upload.actions';
import {User} from '../../../auth/models/user.model';
import {FileMetadataModel} from '../../models/file-metadata.model';
import {Listing} from '../../models/listing.model';


interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  // tslint:disable-next-line:max-line-length
  readonly acceptedFileType: string = '.jpg,.jpeg,.tiff,.gif,.png';
  readonly maxFileSize = 10000000; // 10MB

  @Input() userInfo: User;
  @Input() listingInfo: Listing;
  @Input() isProfilePic: boolean;
  selectedFile: File;
  fileMetaData: FileMetadataModel;
  isRequesting: boolean;
  fileSizeError = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(
        select('imageUpload'),
    ).subscribe((state: ImageUploadState) => {
      this.isRequesting = state.isRequesting;
      if (!this.isRequesting || state.error) {
        this.clearSelection();
      }
    });

    this.fileMetaData = this.buildFileMetadata(this.isProfilePic);
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
    this.store.dispatch(new UploadImageRequest(this.selectedFile, this.fileMetaData));
  }

  buildFileMetadata(isProfilePic: boolean): FileMetadataModel {
    let fileName: string;
    if (isProfilePic) {
      fileName = 'profile_' + this.userInfo.uid;
    } else {
      fileName = 'listing_' + this.listingInfo.uid;
    }
    // tslint:disable-next-line:no-unused-expression
    const fileMetadata: FileMetadataModel = {
      fileName: fileName
    };

    // @ts-ignore
    return fileMetadata;
  }

}
