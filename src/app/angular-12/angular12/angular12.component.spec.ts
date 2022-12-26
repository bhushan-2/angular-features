import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular12Component } from './angular12.component';

describe('Angular12Component', () => {
  let component: Angular12Component;
  let fixture: ComponentFixture<Angular12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
