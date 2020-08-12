import { Component, OnInit } from '@angular/core';
import {SearchWidgetService} from '../search-widget/search-widget.service';


@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.scss']
})
export class SearchWidgetComponent implements OnInit {

  constructor(private searchWidgetService:SearchWidgetService) { }

  ngOnInit() {
  
  }
  sendSearchText(val){
      this.searchWidgetService.setSearchText(val);
  }

}
