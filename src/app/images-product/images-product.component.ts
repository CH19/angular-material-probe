import { Component, OnInit } from '@angular/core';

import {pohtosData} from '../models/photo';
import { PhotosService} from '../services/photos.service'
// modulo necesario para importar objetos que utilizan o hacen peticiones http
import {HttpClientModule} from '@angular/common/http'
import {Router, ActivatedRoute} from '@angular/router';
import { async } from 'rxjs';
@Component({
  selector: 'app-images-product',
  templateUrl: './images-product.component.html',
  styleUrls: ['./images-product.component.scss'],

})
export class ImagesProductComponent implements OnInit {
    id: any = ''
   AllPhotos: pohtosData[] = []

  constructor(public photoService: PhotosService, private router: Router, private route: ActivatedRoute){

  }
  clicked(product: pohtosData){
    product.clicked = !product.clicked;
  }
  ngOnInit(){
    // cuando el componente se cree se hace la peticion a los servicios http para obtener la data de las imagenes
    this.photoService.getPhotos().subscribe(photos =>{ this.AllPhotos = photos; console.log(this.AllPhotos);}, err => console.log(err))
    //crear diversas rutas con el id
    this.id = this.route.snapshot.paramMap.get('id');

  }
}
