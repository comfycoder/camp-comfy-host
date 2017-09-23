import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { SearchFlickrComponent } from './search-flickr.component';

import { FlickrService } from '../services/flickr.service';
import { SpinnerService } from '../services/spinner.service';

describe('SearchFlickrComponent', () => {
  let component: SearchFlickrComponent;
  let fixture: ComponentFixture<SearchFlickrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule.withRoutes([
          {
            path: 'search',
            component: SearchFlickrComponent
          }
        ])
      ],
      declarations: [
        SearchFlickrComponent
      ],
      providers: [
        FlickrService,
        SpinnerService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlickrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
