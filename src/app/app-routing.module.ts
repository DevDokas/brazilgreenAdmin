import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { StrainsPageComponent } from './pages/strains-page/strains-page.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomePageComponent
  },
  {
    path: "strain",
    component: StrainsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
