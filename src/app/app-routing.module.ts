import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MuseumCreateComponent } from './museum/museum-create/museum-create.component';
import { MuseumDeleteComponent } from './museum/museum-delete/museum-delete.component';
import { MuseumDetailComponent } from './museum/museum-detail/museum-detail.component';
import { MuseumListComponent } from './museum/museum-list/museum-list.component';
import { MuseumUpdateComponent } from './museum/museum-update/museum-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'museums',
    component: MuseumListComponent,
    pathMatch: 'full'
  },
  {
    path: 'museums/detail/:id',
    component: MuseumDetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'museums/create',
    component: MuseumCreateComponent,
    pathMatch: 'full'
  },
  {
    path: 'museums/update/:id',
    component: MuseumUpdateComponent,
    pathMatch: 'full'
  },
  {
    path: 'museums/delete/:id',
    component: MuseumDeleteComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
