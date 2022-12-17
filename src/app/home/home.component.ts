import { Component, OnInit } from '@angular/core';
import { Noticia } from '../Models/Noticia';
import { NoticiaService } from '../service/noticia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticias: string[] = []

  constructor(private noticiaService: NoticiaService) {
  }

  ngOnInit() {

  }

 /*getAll() {
    this.noticiaService.index()
      .then(noticias => console.log(noticias))
      .catch(error => console.log(error))
  }

  getId() {
    this.noticiaService.show(1)
      .then(noticia => console.log(noticia))
      .catch(error => console.log(error))
  }

  storeNoticia() {
    const noticia: Noticia = {
      titulo: "Homem de 65 anos morre na pensao escola",
      descricao: "Homem idonio sentiu o prazer e nao consegui na batida",
      img: "https://scontent.flad7-1.fna.fbcdn.net/v/t39.30808-6/319392301_844350669973828_6762203657659977481_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEPI8EYkLha0VSbS5L3cE9IAQR3d6ngLswBBHd3qeAuzEE7j21_3cGINAIv6hkuLCtjsV1poKiKxVuFqCHQNUQv&_nc_ohc=uhOSAdhwZN4AX_Q4Jvf&_nc_ht=scontent.flad7-1.fna&oh=00_AfCIj74L5kEvtYrKXHBslGhDtryNDTZeapVi_LM9QvsUbg&oe=63A2406F"
    }

    this.noticiaService.store(noticia)
      .then(noticia => console.log(noticia))
      .catch(error => console.log(error))
  }

  updateNoticia(){
    const noticia: Noticia = {
      id: 1,
      titulo: "Estamos a baling xxx",
      descricao: "Foi batucada no biva do Samba 2",
      img: "https://scontent.flad7-1.fna.fbcdn.net/v/t39.30808-6/319392301_844350669973828_6762203657659977481_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEPI8EYkLha0VSbS5L3cE9IAQR3d6ngLswBBHd3qeAuzEE7j21_3cGINAIv6hkuLCtjsV1poKiKxVuFqCHQNUQv&_nc_ohc=uhOSAdhwZN4AX_Q4Jvf&_nc_ht=scontent.flad7-1.fna&oh=00_AfCIj74L5kEvtYrKXHBslGhDtryNDTZeapVi_LM9QvsUbg&oe=63A2406F"
    }

    this.noticiaService.update(noticia)
      .then(noticia => console.log(noticia))
      .catch(error => console.log(error))
  }

  deleteNoticia() {
    this.noticiaService.delete(4)
      .then(noticia => console.log(noticia))
      .catch(error => console.log(error))
  }*/

}
