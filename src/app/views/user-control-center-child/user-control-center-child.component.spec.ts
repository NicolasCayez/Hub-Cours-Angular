import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserControlCenterChildComponent } from './user-control-center-child.component';

describe('UserControlCenterChildComponent', () => {
  let component: UserControlCenterChildComponent;
  let fixture: ComponentFixture<UserControlCenterChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserControlCenterChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserControlCenterChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
