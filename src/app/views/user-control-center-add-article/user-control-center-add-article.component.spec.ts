import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserControlCenterAddArticleComponent } from './user-control-center-add-article.component';

describe('UserControlCenterAddArticleComponent', () => {
  let component: UserControlCenterAddArticleComponent;
  let fixture: ComponentFixture<UserControlCenterAddArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserControlCenterAddArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserControlCenterAddArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
