import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFriendsEventBindingComponent } from './list-friends-event-binding.component';

describe('ListFriendsEventBindingComponent', () => {
  let component: ListFriendsEventBindingComponent;
  let fixture: ComponentFixture<ListFriendsEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFriendsEventBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFriendsEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
