import { Component } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  picture: string;

  constructor(private cameraPreview: CameraPreview) {
    
  }

  startCamera(){
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1
    };
    
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res)
        setInterval((data) => {
          this.takePhotoPreview();
        },500);
      },
      (err) => {
        alert('Error when the app was starting the camera');
      });
  }

  takePhotoPreview(){
    
    const pictureOpts: CameraPreviewPictureOptions = {
      width: 1280,
      height: 1280,
      quality: 85
    };

    this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
      this.picture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert('Error when the app was taking the picure');
    });    
  }

  stopCamera(){    
    this.cameraPreview.switchCamera();
    
    this.cameraPreview.setColorEffect('negative');
    
    this.cameraPreview.stopCamera();

    this.picture = '';
  }
}
