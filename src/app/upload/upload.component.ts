import { Component } from '@angular/core';
import { ImageService } from 'src/app/image.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  selectedFile!: File;
  imageDetails: any;

  constructor(private imageService: ImageService) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    this.imageService.uploadImage(this.selectedFile).subscribe(
      data => {
        console.log('Image uploaded successfully');
        // Retrieve and display image details
        this.imageService.getImageDetails(data.id).subscribe(
          details => this.imageDetails = details,
          err => console.log(err)
        );
      },
      err => console.log(err)
    );
  }
}
