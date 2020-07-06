import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorradoresPageRoutingModule } from './borradores-routing.module';

import { BorradoresPage } from './borradores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorradoresPageRoutingModule
  ],
  declarations: [BorradoresPage]
})
export class BorradoresPageModule {}
