import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  id:any
  data: any
  reactiveForm!:FormGroup

  constructor(private route:ActivatedRoute, private noticiaService: NoticiaService){}

  ngOnInit(){
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
    this.noticiaService.show(this.id).subscribe((response: any) => {
      this.reactiveForm.setValue(response.data)
    })
  }

  updateNoticia(){
    this.noticiaService.update(this.reactiveForm.value).subscribe((response:any)=>{
      console.log(response)
    })
  }


}
