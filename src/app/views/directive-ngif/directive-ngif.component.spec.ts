import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgifComponent } from './directive-ngif.component';

describe('DirectiveNgifComponent', () => {
  let component: DirectiveNgifComponent;
  let fixture: ComponentFixture<DirectiveNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveNgifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
