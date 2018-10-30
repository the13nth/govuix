import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Details4Component} from './details-4.component';

describe('DetailsComponent', () => {
  let component: Details4Component;
  let fixture: ComponentFixture<Details4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Details4Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Details4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
