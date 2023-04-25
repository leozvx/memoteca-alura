import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

@Input() pensamento = {
   // colocamos o valor 0 pois os dados reais do `id` virão do componente "pai".
  conteudo: 'Alura',
  autoria: 'Dev',
  modelo: 'modelo3'
}



  constructor() { }

  larguraPensamento() : string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  ngOnInit(): void {
  }





}
