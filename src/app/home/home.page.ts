import { Component,OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';




import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Guid } from 'guid-typescript'
import { imc } from '../models/imc.model';
import { IMCService } from '../services/imc.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  resultado: string
  imc_valor: string
  peso: string
  altura: string
  image: any = "assets/img/Tabela.png"
  imC:string
  armazena: any

  private Imcdado : imc

  public imcForm:FormGroup

  public arrayIMC:any

  constructor(private alertController: AlertController,private Build:FormBuilder, private IMCService: IMCService) {}


  ngOnInit(){
    this.Imcdado = {id: Guid.createEmpty(),peso:"",altura:"",imC:"",resultado:""}

    this.imcForm = this.Build.group({

      id:         [this.Imcdado.id,Validators.required],
      peso:       [this.Imcdado.peso ,Validators.required],
      altura:     [this.Imcdado.altura ,Validators.required],
      imC:        [this.Imcdado.imC],
      resultado:  [this.Imcdado.resultado]


    })
  }

  imc(){
    var n1 = parseFloat(this.peso)
    var n2 = parseFloat(this.altura)
    var cal_imc = n1 / (n2 * n2)
    this.imc_valor = cal_imc.toFixed(1)

    if (cal_imc > 17 && cal_imc < 18.49){
      this.image = 'assets/img/Magreza.png'}
      this.Imcdado.resultado = "Magreza"
      this.Imcdado.imC = this.imc_valor

    if (cal_imc > 18.5 && cal_imc < 24.9){
     this.image = 'assets/img/Saudavel.png'}
     this.Imcdado.imC = this.imc_valor
     this.Imcdado.resultado = "saudavel"

    if (cal_imc > 25 && cal_imc < 29.99){
      this.image = 'assets/img/Obesidade Grau 1.png'}
      this.imC = this.imc_valor
      this.resultado = "Obesidade Grau 1"

    if (cal_imc > 30 && cal_imc < 39.99){
      this.image = 'assets/img/Obesidade Grau 2.png'}
      this.Imcdado.imC = this.imc_valor
      this.Imcdado.resultado = "Obesidade Grau 2"

    if (cal_imc > 40){
      this.image = 'assets/img/Obesidade Grau 3.png'}
      this.Imcdado.imC = this.imc_valor
      this.Imcdado.resultado = "Obesidade Grau 3"

    }

enviar(){

  console.log(this.imc_valor)
  console.log(this.resultado)
  this.armazena = this.imcForm.value
  this.armazena.imC = this.imc_valor
  this.armazena.resultado = this.resultado
  = this.resultado.toString()




  console.log(this.armazena)
  if (this.imcForm.valid){
    console.log(this.imcForm.value)
    this.IMCService.insert(this.armazena)
  }
}


}
