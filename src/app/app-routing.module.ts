import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from "./add/add.component";
import {ListComponent} from "./list/list.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {InscriptionComponent} from "./inscription/inscription.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: InscriptionComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
