import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForPermitComponent } from './apply-for-permit.component';

describe('ApplyForPermitComponent', () => {
  let component: ApplyForPermitComponent;
  let fixture: ComponentFixture<ApplyForPermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyForPermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
