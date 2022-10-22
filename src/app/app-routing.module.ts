import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { CandeactivateGuard } from './candeactivate.guard';
import {TableComponent} from './table/table.component';

const routes: Routes = [
  {
    path: 'address',
    component: AddressComponent,
    canDeactivate: [CandeactivateGuard],
  },
  {
    path: 'table',
    component: TableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
