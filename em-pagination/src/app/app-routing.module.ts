import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationGridComponent } from './components/pagination-grid/pagination-grid.component';
import { PaginationOnlyComponent } from './components/pagination-only/pagination-only.component';

const routes: Routes = [
  { path: 'pagination-grid', component: PaginationGridComponent },
  { path: '', redirectTo: '/pagination-grid', pathMatch: 'full' },
  { path: 'pagination-only', component: PaginationOnlyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
