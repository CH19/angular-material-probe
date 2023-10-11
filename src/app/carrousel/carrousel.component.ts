import { Component } from '@angular/core';
type busyProduct = {
  iamge: string,
  title: string,
  description: string
}

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent {
  images: busyProduct[] = [
    {
      iamge: 'https://i.imgur.com/5iNAL9T.jpeg',
      title: 'camisa',
      description: 'Una camisa',
    },
    {
      iamge: 'https://i.imgur.com/GwylUgV.jpeg',
      title: 'pantalon',
      description: 'un pantalon',
    },
    {
      iamge: 'https://i.imgur.com/Dm2pPfd.jpeg',
      title: 'gorra',
      description: 'una gorra',
    }
  ]
}
