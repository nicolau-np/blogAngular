import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

errors = {
  titulo: null,
  descricao:null,
  img: null
}

status = false

reactiveForm!:FormGroup

constructor(private controller: NoticiaService) {
}

ngOnInit(){
  this.reactiveForm = new FormGroup({
      id: new FormControl(null),
      titulo: new FormControl(null, Validators.required),
      descricao:  new FormControl(null, Validators.required),
      img:  new FormControl(null, Validators.required),
  })
}

onSubmit(){
  this.storeNoticia()
}

storeNoticia() {
  this.controller.store(this.reactiveForm.value, "noticias").subscribe(
    (response:any) => {
      this.clearFields()
      this.status = true
      console.log(response)
    }, (er:any)=>{
      this.errors = er.error.errors
    })
}

clearFields(){
 this.reactiveForm.reset()
}

}
