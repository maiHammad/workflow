import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeokflowNameComponent } from './weokflow-name.component';

describe('WeokflowNameComponent', () => {
  let component: WeokflowNameComponent;
  let fixture: ComponentFixture<WeokflowNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeokflowNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeokflowNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
