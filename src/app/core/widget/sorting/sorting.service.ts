import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SortingService {
  public sortingText: Subject<string> = new Subject<string>();

  constructor() { }
  initSort(): Observable<string> {
    return this.sortingText.asObservable();
  }

  setSort(value) {
    this.sortingText.next(value);
  }

}
