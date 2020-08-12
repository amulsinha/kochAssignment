import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchWidgetService {
  public searchText: Subject<string> = new Subject<string>();

  constructor() { }
  initSearchText(): Observable<string> {
    return this.searchText.asObservable();
  }

  setSearchText(value) {
    this.searchText.next(value);
  }

}
