import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppState} from '../../../reducers';
import {select, Store} from '@ngrx/store';
import {ImageUploadState} from '../../../store/image-upload/image-upload.reducers';
import {UploadImageRequest} from '../../../store/image-upload/image-upload.actions';


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
  readonly acceptedFileType: string = '.pdf,.jpg,.jpeg,.tiff,.gif,.png';
  readonly maxFileSize = 10000000; // 10MB

  selectedFile: File;
  progress: number;
  isRequesting: boolean;
  fileSizeError = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(
        select('imageUpload'),
    ).subscribe((state: ImageUploadState) => {
      this.isRequesting = state.isRequesting;
      this.progress = state.progress;
      if (this.progress === 100 && !this.isRequesting || state.error) {
        this.clearSelection();
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
    this.store.dispatch(new UploadImageRequest(this.selectedFile));
  }

  uploadInProgress(): boolean {
    return this.progress > 0 && this.progress < 100;
  }

}
