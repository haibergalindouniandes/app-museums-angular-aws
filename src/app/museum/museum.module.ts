import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { MuseumListComponent } from './museum-list/museum-list.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
  ],
  exports: [MuseumListComponent],
  declarations: [MuseumListComponent]
})
export class MuseumModule { }
