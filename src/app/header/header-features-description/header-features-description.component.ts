import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header-features-description',
  templateUrl: './header-features-description.component.html',
  styleUrls: ['./header-features-description.component.scss']
})
export class HeaderFeaturesDescriptionComponent implements OnInit {
  @Input() pageTitle: string;
  constructor() { }

  ngOnInit() {
  }

}
