import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {


  profileForm = this.fb.group({
    titulo: ['', Validators.required],
    descricao: ['', Validators.required],
    img: ['', Validators.required],
  });

constructor(private fb: FormBuilder) { }

  submit(){
    console.log(this.profileForm.value);
  }

}
