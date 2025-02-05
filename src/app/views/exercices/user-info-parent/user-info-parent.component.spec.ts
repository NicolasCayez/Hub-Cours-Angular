import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoParentComponent } from './user-info-parent.component';

describe('UserInfoParentComponent', () => {
  let component: UserInfoParentComponent;
  let fixture: ComponentFixture<UserInfoParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInfoParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
