import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFeaturesDescriptionComponent } from './header-features-description.component';

describe('HeaderFeaturesDescriptionComponent', () => {
  let component: HeaderFeaturesDescriptionComponent;
  let fixture: ComponentFixture<HeaderFeaturesDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFeaturesDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFeaturesDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
