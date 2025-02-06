import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment14Component } from './assignment14.component';

describe('Assignment14Component', () => {
  let component: Assignment14Component;
  let fixture: ComponentFixture<Assignment14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
