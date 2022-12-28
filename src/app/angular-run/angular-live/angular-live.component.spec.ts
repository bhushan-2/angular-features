import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLiveComponent } from './angular-live.component';

describe('AngularLiveComponent', () => {
  let component: AngularLiveComponent;
  let fixture: ComponentFixture<AngularLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularLiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
