import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWidgetComponent } from './header-widget.component';

describe('HeaderWidgetComponent', () => {
  let component: HeaderWidgetComponent;
  let fixture: ComponentFixture<HeaderWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
