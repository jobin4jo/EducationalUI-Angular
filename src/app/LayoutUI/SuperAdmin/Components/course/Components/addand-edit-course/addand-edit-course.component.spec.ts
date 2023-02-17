import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddandEditCourseComponent } from './addand-edit-course.component';

describe('AddandEditCourseComponent', () => {
  let component: AddandEditCourseComponent;
  let fixture: ComponentFixture<AddandEditCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddandEditCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddandEditCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
