import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular13Component } from './angular13.component';

describe('Angular13Component', () => {
  let component: Angular13Component;
  let fixture: ComponentFixture<Angular13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
