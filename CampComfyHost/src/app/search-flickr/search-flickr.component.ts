import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { FlickrService } from '../services/flickr.service';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-search-flickr',
  templateUrl: './search-flickr.component.html',
  styleUrls: ['./search-flickr.component.scss']
})
export class SearchFlickrComponent implements OnInit, OnDestroy {

  searchString: string = '';
  photos: any[] = [];

  constructor(
    private flickrService: FlickrService,
    private router: Router,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

  search() {

    this.photos = [];

    if (this.searchString.length === 0) {
      alert('Please first enter a search query.');
      return;
    }

    this.spinnerService.show();

    this.flickrService.search(this.searchString).subscribe(
      data => {
        if (data.length === 0) {
          console.log('no photos matched your search query.');
        }
        else {
          console.log(data);
          this.photos = data;
          console.log(this.photos);
        }
      },
      err => {
        console.log(err);
        this.spinnerService.hide();
        this.router.navigate(['/error']);
      },
      () => {
        console.log('Flickr search complete');
        this.spinnerService.hide();
      }
    );
  }
}
