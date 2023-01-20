import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./components/create/create.component";
import { EditComponent } from "./components/edit/edit.component";
import { HomeComponent } from "./components/home/home.component";
import { ListarComponent } from "./components/listar/listar.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ShowComponent } from "./components/show/show.component";
import { UserdetailComponent } from "./components/userdetail/userdetail.component";
import { AuthGuard } from "./service/auth.guard"

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listar', component: ListarComponent, canActivate:[AuthGuard] },
  { path: 'novo', component: CreateComponent, canActivate:[AuthGuard] },
  { path: 'show/:id', component: ShowComponent},
  { path: 'edit/:id', component: EditComponent, canActivate:[AuthGuard]},
  { path: 'userdetail', component: UserdetailComponent, canActivate:[AuthGuard]},
  { path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



