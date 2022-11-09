import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoas } from '../pessoas.model';
import { PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-pessoas-delete',
  templateUrl: './pessoas-delete.component.html',
  styleUrls: ['./pessoas-delete.component.css']
})
export class PessoasDeleteComponent implements OnInit {

  pessoas: Pessoas = {
    id: '',
    nome: '',
    cpf: '',
    data: '',
  }

  constructor(private service: PessoasService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.pessoas.id = this.router.snapshot.paramMap.get('id')!
    this.findById()
  }


findById(): void {
  this.service.findById(this.pessoas.id!).subscribe(( resposta ) => {
    this.pessoas.nome = resposta.nome
    this.pessoas.cpf = resposta.cpf
    this.pessoas.data = resposta.data
  })
}

delete(): void {

  this.service.delete(this.pessoas.id!).subscribe(( resposta ) => {
    this.route.navigate(['pessoas'])
    this.service.mensagem('Pessoa deletada com sucesso!')
  }, err => {
    this.service.mensagem("Não pode ser deletado, existem contatos associados!")
  })

}

cancel(): void{
  this.route.navigate(['pessoas'])
}

}
