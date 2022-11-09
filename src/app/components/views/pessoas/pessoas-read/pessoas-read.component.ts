import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../pessoas.service';
import { Pessoas } from '../pessoas.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoas-read',
  templateUrl: './pessoas-read.component.html',
  styleUrls: ['./pessoas-read.component.css']
})
export class PessoasReadComponent implements OnInit {

  pessoas: Pessoas[] = []

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'data', 'contatos', 'acoes'];

  constructor(private service: PessoasService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.pessoas = resposta;
    })
  }

  navegarParaPessoasCreate() {
    this.router.navigate([ 'pessoas/create' ])
  }

}
