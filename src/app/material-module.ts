import {NgModule} from '@angular/core';
import {} from '@angular/material'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';


@NgModule({

  imports: [
    MatButtonModule,
    MatCardModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatSelectModule
  ]

})

export class MaterialModule{

}
