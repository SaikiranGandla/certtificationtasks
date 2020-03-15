import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogdateComponent } from './logdate/logdate.component';
import { DisplaydayofweekComponent } from './displaydayofweek/displaydayofweek.component';
import { UsedirectivesComponent } from './usedirectives/usedirectives.component';
import { OnewaydatabindingComponent } from './onewaydatabinding/onewaydatabinding.component';
import { TwowaydataBindingComponent } from './twowaydata-binding/twowaydata-binding.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LogdateComponent,
    DisplaydayofweekComponent,
    UsedirectivesComponent,
    OnewaydatabindingComponent,
    TwowaydataBindingComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
