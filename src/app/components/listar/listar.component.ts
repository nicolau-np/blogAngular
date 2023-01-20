import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/Models/Noticia';
import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

getNoticias: Noticia[] = []

constructor(private controller: NoticiaService){ }

  ngOnInit() {
   this.controller.index("noticias").subscribe(
    (response:any)=>{
      this.getNoticias=response.data
    })
  }

  removeNoticia(noticia: Noticia){
    this.getNoticias = this.getNoticias.filter((a)=> noticia.id!= a.id);
    this.controller.delete(Number(noticia.id), "noticias/").subscribe((response:any)=>{
      console.log(response);
    })
  }

}
