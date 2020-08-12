import { Component, OnInit } from '@angular/core';
import {SortingService} from '../sorting/sorting.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {

  constructor(private sortingService:SortingService) { }

  ngOnInit() {
  }

  change(val){
    this.sortingService.setSort(val);
  }

}
