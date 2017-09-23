import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchFlickrRoutingModule } from './search-flickr-routing.module';
import { SearchFlickrComponent } from './search-flickr.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchFlickrRoutingModule
  ],
  declarations: [
    SearchFlickrComponent
  ]
})
export class SearchFlickrModule { }
