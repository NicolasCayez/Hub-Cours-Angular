import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFriendsNgmodelComponent } from './list-friends-ngmodel.component';

describe('ListFriendsNgmodelComponent', () => {
  let component: ListFriendsNgmodelComponent;
  let fixture: ComponentFixture<ListFriendsNgmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFriendsNgmodelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFriendsNgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
