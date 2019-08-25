import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackMyApplicationComponent } from './track-my-application.component';

describe('TrackMyApplicationComponent', () => {
  let component: TrackMyApplicationComponent;
  let fixture: ComponentFixture<TrackMyApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackMyApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackMyApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
