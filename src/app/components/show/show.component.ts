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
  getNoticia?: Noticia;
  constructor(private noticiaService: NoticiaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getNoticiaId();
  }

  getNoticiaId() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.noticiaService.show(id).subscribe((response: any) => {
      this.getNoticia = response.data
    });
  }

}
