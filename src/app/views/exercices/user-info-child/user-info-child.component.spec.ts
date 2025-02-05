import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoChildComponent } from './user-info-child.component';

describe('UserInfoChildComponent', () => {
  let component: UserInfoChildComponent;
  let fixture: ComponentFixture<UserInfoChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInfoChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
