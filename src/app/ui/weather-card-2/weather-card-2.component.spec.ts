import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherCard2Component} from './weather-card-2.component';

describe('WeatherCardComponent', () => {
  let component: WeatherCard2Component;
  let fixture: ComponentFixture<WeatherCard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherCard2Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
