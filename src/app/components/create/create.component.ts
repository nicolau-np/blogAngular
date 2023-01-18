import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

registerForm!:FormGroup
submitted= false

constructor(private formBuilder:FormBuilder){}

ngOnInit(){
  this.registerForm = this.formBuilder.group({
titulo: ['', Validators.required],
descricao: ['', Validators.required],
img: ['', Validators.required],
  })
}

onSubmit(){

}

}
