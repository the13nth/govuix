import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Details3Component} from './details-3.component';

describe('DetailsComponent', () => {
  let component: Details3Component;
  let fixture: ComponentFixture<Details3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Details3Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Details3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
