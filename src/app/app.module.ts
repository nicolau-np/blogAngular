import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoticiaService } from './service/noticia.service';
import { ListarComponent } from './components/listar/listar.component';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [NoticiaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
