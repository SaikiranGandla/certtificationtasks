import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogdateComponent } from './logdate/logdate.component';
import { DisplaydayofweekComponent } from './displaydayofweek/displaydayofweek.component';
import { UsedirectivesComponent } from './usedirectives/usedirectives.component';
import { OnewaydatabindingComponent } from './onewaydatabinding/onewaydatabinding.component';
import { TwowaydataBindingComponent } from './twowaydata-binding/twowaydata-binding.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {path:'logdate', component: LogdateComponent},
  {path:'UseDirective', component: UsedirectivesComponent},
  {path:'dayofweek', component: DisplaydayofweekComponent},
  {path:'onewaydatabind', component: OnewaydatabindingComponent},
  {path:'twowaydatabind', component: TwowaydataBindingComponent},
  {path:'Register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
