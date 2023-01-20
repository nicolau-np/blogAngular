import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  id:any
  reactiveForm!:FormGroup

  constructor(private route:ActivatedRoute, private controller: NoticiaService, private auth: AuthenticationService){}

  ngOnInit(){
    this.auth.status()
    this.id = this.route.snapshot.paramMap.get('id')
    this.getNoticiaId()

    this.reactiveForm = new FormGroup({
      id: new FormControl(null),
      titulo: new FormControl(null, Validators.required),
      descricao:  new FormControl(null, Validators.required),
      img:  new FormControl(null, Validators.required),
    })

  }

  onSubmit(){
    this.updateNoticia()
  }

  getNoticiaId() {
    this.controller.show(this.id, "noticias/").subscribe((response: any) => {
      this.reactiveForm.setValue(response.data)
    })
  }

  updateNoticia(){
    this.controller.update(this.reactiveForm.value, this.id, "noticias/").subscribe((response:any)=>{
      console.log(response)
    })
  }


}
