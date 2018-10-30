import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherCard4Component} from './weather-card-4.component';

describe('WeatherCardComponent', () => {
  let component: WeatherCard4Component;
  let fixture: ComponentFixture<WeatherCard4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherCard4Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
