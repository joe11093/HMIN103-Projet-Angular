import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresCreateComponent } from './membres-create.component';

describe('MembresCreateComponent', () => {
  let component: MembresCreateComponent;
  let fixture: ComponentFixture<MembresCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembresCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
