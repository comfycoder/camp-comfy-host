import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class FlickrService {

  constructor(
    private http: Http
  ) { }

  baseUrl: string = 'https://api.flickr.com/services/rest';

  search(searchText: string): Observable<any> {

    console.log(searchText);

    const params = new URLSearchParams();
    params.set('method', 'flickr.photos.search');
    params.set('format', 'json');
    // Replace the following with your flicker API key
    params.set('api_key', '53286431b01976732160ae74b1c81a8b');
    params.set('action', 'opensearch');
    params.set('text', searchText);
    params.set('per_page', '25');
    params.set('media', 'photos');
    params.set('content_type', '1');
    params.set('format', 'json');
    params.set('nojsoncallback', '1');

    const requestOptions = new RequestOptions();
    requestOptions.search = params;

    return this.http.get(this.baseUrl, requestOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response): any[] {

    const photos: any[] = [];

    const respPhotos = res.json().photos.photo;

    for (let i = 0; i < respPhotos.length; i++) {

      const farm = respPhotos[i].farm;
      const server = respPhotos[i].server;
      const id = respPhotos[i].id;
      const secret = respPhotos[i].secret;
      const title = respPhotos[i].title;

      const photoUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

      let titleText = title;

      const pos = title.indexOf(' #');

      if (pos > 0) {
        titleText = title.substring(0, pos - 1);
      }

      photos.push({ url: photoUrl, title: titleText });
    }

    return photos;
  }

  private handleError(error: Response | any) {

    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }
    else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);

    return Observable.throw(errMsg);
  }
}
