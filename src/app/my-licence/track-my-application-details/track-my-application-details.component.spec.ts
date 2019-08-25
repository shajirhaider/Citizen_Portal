import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackMyApplicationDetailsComponent } from './track-my-application-details.component';

describe('TrackMyApplicationDetailsComponent', () => {
  let component: TrackMyApplicationDetailsComponent;
  let fixture: ComponentFixture<TrackMyApplicationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackMyApplicationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackMyApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
