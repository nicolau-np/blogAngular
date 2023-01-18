import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Noticia } from 'src/app/Models/Noticia';
import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
title = "Criando Form"
reactiveForm!:FormGroup

constructor(private noticiaService: NoticiaService) {
}

ngOnInit(){
  this.reactiveForm = new FormGroup({
      titulo: new FormControl(null, Validators.required),
      descricao:  new FormControl(null, Validators.required),
      img:  new FormControl(null, Validators.required),
  })
}

onSubmit(){

}

storeNoticia() {
  const noticia: Noticia = {
    titulo: this.reactiveForm.value.titulo,
    descricao: this.reactiveForm.value.descricao,
    img: this.reactiveForm.value.img
  }

  this.noticiaService.store(noticia).subscribe(
    response => {
      console.log(response)
    })

}

}
