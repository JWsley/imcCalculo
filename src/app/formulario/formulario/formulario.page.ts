import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  pessoa = {}
  pessoaForm: FormGroup

  constructor(private formularioBuilder: FormBuilder) { }

  submit(){
    if(this.pessoaForm.invalid || this.pessoaForm.pending){
      return}
      
    else{
      console.log(this.pessoa)}
  }

  ngOnInit() {
    this.pessoaForm = this.formularioBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    })
  }

}
