import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular10Component } from './angular10.component';

describe('Angular10Component', () => {
  let component: Angular10Component;
  let fixture: ComponentFixture<Angular10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
