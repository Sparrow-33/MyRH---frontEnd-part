import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from "./add/add.component";
import {ListComponent} from "./list/list.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {ResultsComponent} from "./results/results.component";
import {NotFoudPageComponent} from "./not-found-page/not-foud-page.component";
import {VerificationComponent} from "./verification/verification.component";
import {CreateOffreComponent} from "./create-offre/create-offre.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: InscriptionComponent},
  {path: "results", component: ResultsComponent},
  {path: "verification", component: VerificationComponent},
  {path: "createPost", component: CreateOffreComponent},
  {path: "**", component: NotFoudPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
