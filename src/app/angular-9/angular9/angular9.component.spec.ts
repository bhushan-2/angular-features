import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular9Component } from './angular9.component';

describe('Angular9Component', () => {
  let component: Angular9Component;
  let fixture: ComponentFixture<Angular9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
