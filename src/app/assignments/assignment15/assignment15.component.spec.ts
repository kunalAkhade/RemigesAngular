import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment15Component } from './assignment15.component';

describe('Assignment15Component', () => {
  let component: Assignment15Component;
  let fixture: ComponentFixture<Assignment15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
