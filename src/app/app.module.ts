import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesModule } from './modules/recipes/recipes.module';
import { ShoppingListModule } from './modules/shopping-list/shopping-list.module';
import { ShoppingListService } from './services/shopping-list.service';
import { AuthenticationService } from './services/authentication.service';
import { RecipesService } from './services/recipes.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'recipe-book'),
    AngularFireAuthModule,
    AppRoutingModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
  ],
  providers: [ShoppingListService, AuthenticationService, RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
