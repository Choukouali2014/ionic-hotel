import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableRoomsPagePage } from './available-rooms-page.page';

describe('AvailableRoomsPagePage', () => {
  let component: AvailableRoomsPagePage;
  let fixture: ComponentFixture<AvailableRoomsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableRoomsPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableRoomsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
