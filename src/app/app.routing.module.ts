import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./components/create/create.component";
import { HomeComponent } from "./components/home/home.component";
import { ListarComponent } from "./components/listar/listar.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'novo', component: CreateComponent },
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



