import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./components/create/create.component";
import { EditComponent } from "./components/edit/edit.component";
import { HomeComponent } from "./components/home/home.component";
import { ListarComponent } from "./components/listar/listar.component";
import { LoginComponent } from "./components/login/login.component";
import { ShowComponent } from "./components/show/show.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'novo', component: CreateComponent },
  { path: 'show/:id', component: ShowComponent},
  { path: 'edit/:id', component: EditComponent},
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



