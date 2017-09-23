import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, JsonpModule } from '@angular/http';

import { FlickrService } from './flickr.service';

describe('FlickrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        JsonpModule
      ],
      providers: [FlickrService]
    });
  });

  it('should be created', inject([FlickrService], (service: FlickrService) => {
    expect(service).toBeTruthy();
  }));
});
