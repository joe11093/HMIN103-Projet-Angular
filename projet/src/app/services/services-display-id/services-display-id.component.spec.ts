import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDisplayIdComponent } from './services-display-id.component';

describe('ServicesDisplayIdComponent', () => {
  let component: ServicesDisplayIdComponent;
  let fixture: ComponentFixture<ServicesDisplayIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesDisplayIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesDisplayIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});