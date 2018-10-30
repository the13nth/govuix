import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherCard3Component} from './weather-card-3.component';

describe('WeatherCardComponent', () => {
  let component: WeatherCard3Component;
  let fixture: ComponentFixture<WeatherCard3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherCard3Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
