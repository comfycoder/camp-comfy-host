import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpinnerService {

  private spinnerSubject = new Subject<boolean>();
  public spinnerObservable: Observable<boolean>;

  constructor() {
    this.spinnerObservable = this.spinnerSubject.asObservable();
  }

  show() {
      this.spinnerSubject.next(true);
  }

  hide() {
      this.spinnerSubject.next(false);
  }
}
