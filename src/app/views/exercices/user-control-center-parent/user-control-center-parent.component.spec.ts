import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserControlCenterParentComponent } from './user-control-center-parent.component';

describe('UserControlCenterParentComponent', () => {
  let component: UserControlCenterParentComponent;
  let fixture: ComponentFixture<UserControlCenterParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserControlCenterParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserControlCenterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
