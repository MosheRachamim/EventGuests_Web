import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsArriveInfoComponent } from './guests-arrive-info.component';

describe('GuestsArriveInfoComponent', () => {
  let component: GuestsArriveInfoComponent;
  let fixture: ComponentFixture<GuestsArriveInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestsArriveInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsArriveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
