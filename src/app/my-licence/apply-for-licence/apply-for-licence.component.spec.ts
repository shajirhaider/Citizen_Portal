import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForLicenceComponent } from './apply-for-licence.component';

describe('ApplyForLicenceComponent', () => {
  let component: ApplyForLicenceComponent;
  let fixture: ComponentFixture<ApplyForLicenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyForLicenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
