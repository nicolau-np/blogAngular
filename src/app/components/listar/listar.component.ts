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

constructor(private noticiaService: NoticiaService){ }

  ngOnInit() {
   this.noticiaService.index().subscribe(
    (response:any)=>{
      this.getNoticias=response.data
    })
  }

  removeNoticia(noticia: Noticia){
    this.getNoticias = this.getNoticias.filter((a)=> noticia.id!= a.id);
    this.noticiaService.delete(Number(noticia.id)).subscribe((response:any)=>{
      console.log(response);
    })
  }

}
