import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectResourceComponent } from './components/select-resource/select-resource.component';
import { HomeComponent } from './pages/home/home.component';
import { GetResourceComponent } from './pages/get-resource/get-resource.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },{
    path: 'select-resource',
    component: SelectResourceComponent
  },{
    path: 'get-resource/:value',
    component: GetResourceComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
