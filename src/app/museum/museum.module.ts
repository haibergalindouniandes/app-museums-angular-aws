import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { MuseumListComponent } from './museum-list/museum-list.component';
import { MuseumCreateComponent } from './museum-create/museum-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MuseumUpdateComponent } from './museum-update/museum-update.component';
import { MuseumDeleteComponent } from './museum-delete/museum-delete.component';
import { MuseumUnlockComponent } from './museum-unlock/museum-unlock.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    MuseumListComponent,
    MuseumCreateComponent,
    MuseumDetailComponent,
    MuseumUpdateComponent,
    MuseumDeleteComponent,
    MuseumUnlockComponent
  ],
  declarations: [
    MuseumListComponent,
    MuseumCreateComponent,
    MuseumDetailComponent,
    MuseumUpdateComponent,
    MuseumDeleteComponent,
    MuseumUnlockComponent
  ]
})
export class MuseumModule { }
