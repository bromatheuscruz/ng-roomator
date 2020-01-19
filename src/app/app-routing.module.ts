import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAnimalComponent } from './create-animal/create-animal.component';
import { AverageWeightComponent } from './average-weight/average-weight.component';
import { HowManyCanBeSoldComponent } from './how-many-can-be-sold/how-many-can-be-sold.component';
import { CurrentValueComponent } from './current-value/current-value.component';
import { CustomCurrentValueComponent } from './custom-current-value/custom-current-value.component';

const routes: Routes = [
  { path: '', component: CreateAnimalComponent },
  { path: 'average-weight', component: AverageWeightComponent },
  { path: 'how-many-can-be-sold', component: HowManyCanBeSoldComponent },
  { path: 'current-value', component: CurrentValueComponent },
  { path: 'custom-current-value', component: CustomCurrentValueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
