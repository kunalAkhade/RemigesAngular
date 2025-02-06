import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTemplate2Component } from './book-template2.component';

describe('BookTemplate2Component', () => {
  let component: BookTemplate2Component;
  let fixture: ComponentFixture<BookTemplate2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookTemplate2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookTemplate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
