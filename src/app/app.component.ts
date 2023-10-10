import { Component } from '@angular/core';

import { PhotosService} from './services/photos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-prueba';
  options = [1,2,3];
}
