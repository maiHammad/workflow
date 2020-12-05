import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewActivityComponent } from './home-new-activity.component';

describe('HomeNewActivityComponent', () => {
  let component: HomeNewActivityComponent;
  let fixture: ComponentFixture<HomeNewActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNewActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNewActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
