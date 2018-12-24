import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsDisplayIdComponent } from './goods-display-id.component';

describe('GoodsDisplayIdComponent', () => {
  let component: GoodsDisplayIdComponent;
  let fixture: ComponentFixture<GoodsDisplayIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsDisplayIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsDisplayIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
