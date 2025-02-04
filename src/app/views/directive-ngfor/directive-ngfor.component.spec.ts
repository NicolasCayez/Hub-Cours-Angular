import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgforComponent } from './directive-ngfor.component';

describe('DirectiveNgifComponent', () => {
  let component: DirectiveNgforComponent;
  let fixture: ComponentFixture<DirectiveNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveNgforComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
