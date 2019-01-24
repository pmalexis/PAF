import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoiffureComponent} from './coiffure/coiffure.component';
import {CoiffuresComponent} from './coiffures/coiffures.component';
import {AjoutCoiffureComponent} from './ajout-coiffure/ajout-coiffure.component';
import {SearchComponent} from './search/search.component';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {CoiffeursComponent} from './coiffeurs/coiffeurs.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
    {path: 'coiffures', component: CoiffuresComponent},
    {path: 'coiffures/add', component: AjoutCoiffureComponent},
    {path: 'search', component: SearchComponent},
    {path: 'coiffures/:id', component: CoiffureComponent},
    {path: 'profile', component: UserComponent},
    {path: 'login', component: LoginComponent},
    {path: 'coiffeurs', component: CoiffeursComponent},
    {path: 'home', component: HomeComponent},

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
