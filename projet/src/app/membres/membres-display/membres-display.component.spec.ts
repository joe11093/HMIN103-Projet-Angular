import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresDisplayComponent } from './membres-display.component';

describe('MembresDisplayComponent', () => {
  let component: MembresDisplayComponent;
  let fixture: ComponentFixture<MembresDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembresDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembresDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
