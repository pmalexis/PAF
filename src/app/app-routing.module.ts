import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoiffureComponent} from "./coiffure/coiffure.component";
import {CoiffuresComponent} from "./coiffures/coiffures.component";
import {AjoutCoiffureComponent} from "./ajout-coiffure/ajout-coiffure.component";
import { SearchComponent } from "./search/search.component";

const routes: Routes = [
  {path: 'coiffures', component: CoiffuresComponent},
  {path: 'coiffures/add', component: AjoutCoiffureComponent},
  {path: 'search', component: SearchComponent},
  {path: 'coiffures/:id', component: CoiffureComponent},
  {
    path: '',
    redirectTo: '/coiffures',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
