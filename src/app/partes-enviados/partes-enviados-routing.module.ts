import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartesEnviadosPage } from './partes-enviados.page';

const routes: Routes = [
  {
    path: '',
    component: PartesEnviadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartesEnviadosPageRoutingModule {}
