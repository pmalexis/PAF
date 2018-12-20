import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoiffureComponent} from "./coiffure/coiffure.component";
import {CoiffuresComponent} from "./coiffures/coiffures.component";

const routes: Routes = [
  {path: 'coiffures', component: CoiffuresComponent},
  {path: 'coiffures/:id', component: CoiffureComponent},
  {
    path: '',
    redirectTo: '/Coiffures',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
