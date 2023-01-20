import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoticiaService } from './service/noticia.service';
import { ListarComponent } from './components/listar/listar.component';
import { CreateComponent } from './components/create/create.component';
import { ShowComponent } from './components/show/show.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { UserdetailComponent } from "./components/userdetail/userdetail.component";
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ListarComponent,
    CreateComponent,
    ShowComponent,
    EditComponent,
    LoginComponent,
    UserdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [NoticiaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
