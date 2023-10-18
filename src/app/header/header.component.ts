import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  mercadoLibre = {
    logo: 'https://play-lh.googleusercontent.com/lO0-UT9yyZ55shpgJVKcBxYGd1MWwdsxoK1GjNcd9FkcYHX4yjjj5OqktP0O1rVoTwU=w240-h480',
    url: 'https://www.mercadolibre.com',
  }
  promo = '¡oferta!';
  data = ['Historial','Tiendas Oficiales','Ofertas de la semana','Vender','Ayuda'];

}
