import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento/pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {


  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router
){ }

  ngOnInit(): void {

  }

  salvarPensamento() {
    this.service.criar(this.pensamento).subscribe()
    this.router.navigate(['/listarpensamento'])
  }

  cancelarPensamento() {
    alert("Pensamento cancelado!")
    this.router.navigate(['/listarpensamento'])
  }

}
