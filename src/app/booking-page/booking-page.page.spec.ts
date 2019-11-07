import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPagePage } from './booking-page.page';

describe('BookingPagePage', () => {
  let component: BookingPagePage;
  let fixture: ComponentFixture<BookingPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
