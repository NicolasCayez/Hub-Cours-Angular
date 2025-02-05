import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFriendsPropertyBindingComponent } from './list-friends-property-binding.component';

describe('ListFriendsPropertyBindingComponent', () => {
  let component: ListFriendsPropertyBindingComponent;
  let fixture: ComponentFixture<ListFriendsPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFriendsPropertyBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFriendsPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
