import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCatConnetToAppDataComponent } from './sub-cat-connet-to-app-data.component';

describe('SubCatConnetToAppDataComponent', () => {
  let component: SubCatConnetToAppDataComponent;
  let fixture: ComponentFixture<SubCatConnetToAppDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCatConnetToAppDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCatConnetToAppDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
