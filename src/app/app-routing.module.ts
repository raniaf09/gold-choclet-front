import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeteComponent } from './compnents/public/fete/fete.component';
import { HomeComponent } from './compnents/public/home/home.component';
import { NavbarComponent } from './compnents/public/navbar/navbar.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
  path:'fete',
  component:FeteComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
