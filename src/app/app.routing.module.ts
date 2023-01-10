import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./components/create/create.component";
import { HomeComponent } from "./components/home/home.component";
import { ListarComponent } from "./components/listar/listar.component";
import { ShowComponent } from "./components/show/show.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'novo', component: CreateComponent },
  { path: 'show/:id', component: ShowComponent},
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



