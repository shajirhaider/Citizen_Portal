import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackMyPermitDetailsComponent } from './track-my-permit-details.component';

describe('TrackMyPermitDetailsComponent', () => {
  let component: TrackMyPermitDetailsComponent;
  let fixture: ComponentFixture<TrackMyPermitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackMyPermitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackMyPermitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
