import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-component',
  templateUrl: './segundo-component.component.html',
  styleUrls: ['./segundo-component.component.css']
})
export class SegundoComponentComponent  {

  nome = "Anne";
  dataNascimento = "1985-07-28";
  urlImagem = "/assets/flor.jpg";

  mostrarDataNascimento() {
    alert(`A data de nascimento do(a) ${this.nome} é: ${this.dataNascimento}`)
  }

}
