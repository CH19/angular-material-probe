import {NgModule} from '@angular/core';
import {} from '@angular/material'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';


@NgModule({

  imports: [
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule
  ]

})

export class MaterialModule{

}
