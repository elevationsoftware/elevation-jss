import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Column4Component } from './column-4.component';

describe('Column4Component', () => {
  let component: Column4Component;
  let fixture: ComponentFixture<Column4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Column4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Column4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
