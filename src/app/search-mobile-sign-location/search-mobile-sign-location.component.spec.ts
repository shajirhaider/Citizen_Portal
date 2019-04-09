import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMobileSignLocationComponent } from './search-mobile-sign-location.component';

describe('SearchMobileSignLocationComponent', () => {
  let component: SearchMobileSignLocationComponent;
  let fixture: ComponentFixture<SearchMobileSignLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMobileSignLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMobileSignLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
