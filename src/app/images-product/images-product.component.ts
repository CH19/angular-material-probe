import { Component, OnInit } from '@angular/core';

import { PhotosService} from '../services/photos.service'
import {HttpClientModule} from '@angular/common/http'
@Component({
  selector: 'app-images-product',
  templateUrl: './images-product.component.html',
  styleUrls: ['./images-product.component.css'],

})
export class ImagesProductComponent implements OnInit {

  constructor(public photoService: PhotosService){

  }

  ngOnInit(){
    this.photoService.getPhotos().subscribe(photos => console.log(photos), err => console.log(err))
  }
}
