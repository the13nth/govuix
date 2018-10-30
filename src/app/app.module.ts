import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HomeComponent} from './pages/home/home.component';
import {DetailsComponent} from './pages/details/details.component';
import {Details1Component} from './pages/details-1/details-1.component';
import {Details2Component} from './pages/details-2/details-2.component';
import {Details3Component} from './pages/details-3/details-3.component';
import {Details4Component} from './pages/details-4/details-4.component';
import {Details5Component} from './pages/details-5/details-5.component';
import {WeatherService} from './services/weather/weather.service';
import {HttpClientModule} from '@angular/common/http';
import {WeatherCardComponent} from './ui/weather-card/weather-card.component';
import {AddCardComponent} from './ui/add-card/add-card.component';
import {AddComponent} from './pages/add/add.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {UiService} from './services/ui/ui.service';
import {WeatherCard1Component} from './ui/weather-card-1/weather-card-1.component';
import {WeatherCard2Component} from './ui/weather-card-2/weather-card-2.component';
import {WeatherCard3Component} from './ui/weather-card-3/weather-card-3.component';
import {WeatherCard4Component} from './ui/weather-card-4/weather-card-4.component';
import {WeatherCard5Component} from './ui/weather-card-5/weather-card-5.component';

// Import ngx-twitter-timeline
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
// Material design


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    Details1Component,
    Details2Component,
    Details3Component,
    Details4Component,
    Details5Component,
    WeatherCardComponent,
    WeatherCard1Component,
    WeatherCard2Component,
    WeatherCard3Component,
    WeatherCard4Component,
    WeatherCard5Component,
    AddCardComponent,
    AddComponent,
    LoginComponent,
    SignupComponent,
    AddCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxTwitterTimelineModule.forRoot(),
  ],
  providers: [
    WeatherService,
    UiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
export class PizzaPartyAppModule {}
