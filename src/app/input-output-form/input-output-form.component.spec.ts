import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputFormComponent } from './input-output-form.component';

describe('InputOutputFormComponent', () => {
  let component: InputOutputFormComponent;
  let fixture: ComponentFixture<InputOutputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputOutputFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputOutputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
