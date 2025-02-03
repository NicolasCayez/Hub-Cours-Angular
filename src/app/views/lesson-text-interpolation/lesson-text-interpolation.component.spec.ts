import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTextInterpolationComponent } from './lesson-text-interpolation.component';

describe('LessonTextInterpolationComponent', () => {
  let component: LessonTextInterpolationComponent;
  let fixture: ComponentFixture<LessonTextInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonTextInterpolationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonTextInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
