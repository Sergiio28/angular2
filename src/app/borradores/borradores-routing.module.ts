import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorradoresPage } from './borradores.page';

const routes: Routes = [
  {
    path: '',
    component: BorradoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorradoresPageRoutingModule {}
