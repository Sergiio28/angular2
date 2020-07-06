import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoPartePage } from './nuevo-parte.page';
import { DatabasePage } from '../database/database.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoPartePage
  },
  {
    path: '../database',
    component: DatabasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoPartePageRoutingModule {}
