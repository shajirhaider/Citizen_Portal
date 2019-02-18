import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePlanApprovalsComponent } from './site-plan-approvals.component';

describe('SitePlanApprovalsComponent', () => {
  let component: SitePlanApprovalsComponent;
  let fixture: ComponentFixture<SitePlanApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitePlanApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitePlanApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
