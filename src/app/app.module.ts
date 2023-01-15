import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import {FormsModule} from "@angular/forms";
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {HttpClientModule} from "@angular/common/http";
import { NotFoudPageComponent } from './not-found-page/not-foud-page.component';
import { ResultsComponent } from './results/results.component';
import { SingleResultComponent } from './single-result/single-result.component';
import { VerificationComponent } from './verification/verification.component';
import { CreateOffreComponent } from './create-offre/create-offre.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AddComponent,
    ListComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    InscriptionComponent,
    NotFoudPageComponent,
    ResultsComponent,
    SingleResultComponent,
    VerificationComponent,
    CreateOffreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
