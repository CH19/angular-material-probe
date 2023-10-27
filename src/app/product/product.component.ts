import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {pohtosData} from '../models/photo'



import {Router, ActivatedRoute} from '@angular/router';
import { elementAt } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})



export class ProductComponent {
  id: any = '';
  selected = '';
  productsAgain: any[] = [{"id":9,"title":"Elegant Soft Bike","price":13,"description":"Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals","images":["https://i.imgur.com/uDpzwEk.jpeg","https://i.imgur.com/Y5gHJMd.jpeg","https://i.imgur.com/x0K3SKA.jpeg"],"creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z","category":{"id":5,"name":"Others","image":"https://i.imgur.com/nCqOV7L.jpeg","creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z"}},{"id":11,"title":"Practical Rubber Cheese","price":366,"description":"Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support","images":["https://i.imgur.com/0KlqHu9.jpeg","https://i.imgur.com/5mPmJYO.jpeg","https://i.imgur.com/uDpzwEk.jpeg"],"creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z","category":{"id":3,"name":"Furniture","image":"https://i.imgur.com/M3QKiC5.jpeg","creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z"}},{"id":12,"title":"Recycled Metal Shoes","price":498,"description":"New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016","images":["https://i.imgur.com/0KlqHu9.jpeg","https://i.imgur.com/gxaUWSF.jpeg","https://i.imgur.com/0KlqHu9.jpeg"],"creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z","category":{"id":4,"name":"Shoes","image":"https://i.imgur.com/x0K3SKA.jpeg","creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z"}},{"id":13,"title":"Modern Cotton Ball","price":667,"description":"New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016","images":["https://i.imgur.com/lVH533g.jpeg","https://i.imgur.com/QEGACen.jpeg","https://i.imgur.com/5iNAL9T.jpeg"],"creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z","category":{"id":4,"name":"Shoes","image":"https://i.imgur.com/x0K3SKA.jpeg","creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z"}},{"id":14,"title":"Fantastic Metal Pants","price":636,"description":"The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients","images":["https://i.imgur.com/fpT4052.jpeg","https://i.imgur.com/uDpzwEk.jpeg","https://i.imgur.com/OLKMwgP.jpeg"],"creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z","category":{"id":2,"name":"Electronics","image":"https://i.imgur.com/5mPmJYO.jpeg","creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z"}},{"id":15,"title":"Rustic Rubber Chips","price":476,"description":"Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals","images":["https://i.imgur.com/RLnJJyQ.jpeg","https://i.imgur.com/DumuKkD.jpeg","https://i.imgur.com/imQx3Az.jpeg"],"creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z","category":{"id":3,"name":"Furniture","image":"https://i.imgur.com/M3QKiC5.jpeg","creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z"}},{"id":16,"title":"Oriental Steel Towels","price":410,"description":"The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality","images":["https://i.imgur.com/uDpzwEk.jpeg","https://i.imgur.com/aCDF0yh.jpeg","https://i.imgur.com/kTPCFG2.jpeg"],"creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z","category":{"id":5,"name":"Others","image":"https://i.imgur.com/nCqOV7L.jpeg","creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z"}},{"id":17,"title":"Handmade Metal Bacon","price":761,"description":"The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design","images":["https://i.imgur.com/kTPCFG2.jpeg","https://i.imgur.com/DumuKkD.jpeg","https://i.imgur.com/QEGACen.jpeg"],"creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z","category":{"id":4,"name":"Shoes","image":"https://i.imgur.com/x0K3SKA.jpeg","creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z"}},{"id":18,"title":"Fantastic Wooden Fish","price":251,"description":"The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive","images":["https://i.imgur.com/0KlqHu9.jpeg","https://i.imgur.com/DumuKkD.jpeg","https://i.imgur.com/kTPCFG2.jpeg"],"creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z","category":{"id":5,"name":"Others","image":"https://i.imgur.com/nCqOV7L.jpeg","creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z"}},{"id":19,"title":"Luxurious Cotton Towels","price":346,"description":"The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients","images":["https://i.imgur.com/5iNAL9T.jpeg","https://i.imgur.com/00qWleT.jpeg","https://i.imgur.com/5iNAL9T.jpeg"],"creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z","category":{"id":3,"name":"Furniture","image":"https://i.imgur.com/M3QKiC5.jpeg","creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z"}},{"id":20,"title":"Handcrafted Metal Cheese","price":535,"description":"The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients","images":["https://i.imgur.com/RLnJJyQ.jpeg","https://i.imgur.com/fpT4052.jpeg","https://i.imgur.com/fpT4052.jpeg"],"creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z","category":{"id":2,"name":"Electronics","image":"https://i.imgur.com/5mPmJYO.jpeg","creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z"}},{"id":21,"title":"Practical Granite Pants","price":454,"description":"New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016","images":["https://i.imgur.com/rUWNzYa.jpeg","https://i.imgur.com/s8WRA2O.jpeg","https://i.imgur.com/M3QKiC5.jpeg"],"creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z","category":{"id":1,"name":"sarady","image":"https://i.imgur.com/zQwsC2m.jpeg","creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T06:14:21.000Z"}},{"id":22,"title":"Intelligent Cotton Hat","price":591,"description":"New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart","images":["https://i.imgur.com/nZnWUc0.jpeg","https://i.imgur.com/5mPmJYO.jpeg","https://i.imgur.com/OLKMwgP.jpeg"],"creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z","category":{"id":5,"name":"Others","image":"https://i.imgur.com/nCqOV7L.jpeg","creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z"}},{"id":23,"title":"Small Concrete Chicken","price":301,"description":"Carbonite web goalkeeper gloves are ergonomically designed to give easy fit","images":["https://i.imgur.com/zQwsC2m.jpeg","https://i.imgur.com/OARGZQW.jpeg","https://i.imgur.com/s8WRA2O.jpeg"],"creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z","category":{"id":2,"name":"Electronics","image":"https://i.imgur.com/5mPmJYO.jpeg","creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z"}},{"id":24,"title":"Unbranded Bronze Computer","price":962,"description":"The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J","images":["https://i.imgur.com/aCDF0yh.jpeg","https://i.imgur.com/RLnJJyQ.jpeg","https://i.imgur.com/DumuKkD.jpeg"],"creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z","category":{"id":3,"name":"Furniture","image":"https://i.imgur.com/M3QKiC5.jpeg","creationAt":"2023-10-26T04:26:11.000Z","updatedAt":"2023-10-26T04:26:11.000Z"}}];
  ActualPRoduct: any = [];
  FreeSend: boolean = Math.random() > .5 ? true : false
  constructor(private router: Router, private route: ActivatedRoute){

  }
  selectedMethod(img: string){
    this.selected = img;
  }
  ngOnInit(){
        //crear diversas rutas con el id
        this.id = this.route.snapshot.paramMap.get('id');
        this.ActualPRoduct = this.productsAgain.filter(element => this.id == element.id);
    console.log(this.ActualPRoduct);
    this.selected = this.ActualPRoduct[0]?.images[0];
  }
  stars(){
    const star = new Array(5);

    for (let index = 0; index < star.length; index++) {
      let ran = Boolean(Math.random() < .1) ? false: true;
      console.log(ran);
      if(ran){
        star[index] = 'star';
      }else{
        for (let j = index; j < star.length; j++) {
          star[j] = 'star_border'
        };
        break;
      }

    }
    return star
  }
  starti = this.stars()
}
