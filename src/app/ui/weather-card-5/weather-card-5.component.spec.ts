import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherCard5Component} from './weather-card-5.component';

describe('WeatherCardComponent', () => {
  let component: WeatherCard5Component;
  let fixture: ComponentFixture<WeatherCard5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherCard5Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCard5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
