import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Details5Component} from './details-5.component';

describe('DetailsComponent', () => {
  let component: Details5Component;
  let fixture: ComponentFixture<Details5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Details5Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Details5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
