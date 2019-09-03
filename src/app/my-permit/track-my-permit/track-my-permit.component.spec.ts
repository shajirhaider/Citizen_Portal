import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackMyPermitComponent } from './track-my-permit.component';

describe('TrackMyPermitComponent', () => {
  let component: TrackMyPermitComponent;
  let fixture: ComponentFixture<TrackMyPermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackMyPermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackMyPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
