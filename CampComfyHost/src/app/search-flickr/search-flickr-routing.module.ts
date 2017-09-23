import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchFlickrComponent } from './search-flickr.component';

const routes: Routes = [
  {
    path: '',
    component: SearchFlickrComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchFlickrRoutingModule { }
