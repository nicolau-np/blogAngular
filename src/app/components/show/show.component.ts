import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Noticia } from 'src/app/Models/Noticia';
import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  status:any
  getNoticia?: Noticia
  constructor(private controller: NoticiaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getNoticiaId();
  }

  getNoticiaId() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.controller.show(id, "noticias/").subscribe((response: any) => {
      this.getNoticia = response.data
    }, (er:any)=>{
      this.status = true
    });
  }

}
