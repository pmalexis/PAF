import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoiffuresComponent} from './coiffures/coiffures.component';
import {CoiffureComponent} from './coiffure/coiffure.component';
import {FormsModule} from '@angular/forms';
import {AjoutCoiffureComponent} from './ajout-coiffure/ajout-coiffure.component';
import {SearchComponent} from './search/search.component';
import {SearchPipe} from './pipes/search.pipe';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {CoiffeursComponent} from './coiffeurs/coiffeurs.component';
import {HomeComponent} from './home/home.component';
import {OrderModule} from 'ngx-order-pipe';

@NgModule({
    declarations: [
        AppComponent,
        CoiffureComponent,
        CoiffuresComponent,
        AjoutCoiffureComponent,
        SearchComponent,
        SearchPipe,
        UserComponent,
        LoginComponent,
        CoiffeursComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        OrderModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
