import { Component, OnInit } from '@angular/core';
import { Pessoas } from '../pessoas.model';
import { PessoasService } from '../pessoas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoas-update',
  templateUrl: './pessoas-update.component.html',
  styleUrls: ['./pessoas-update.component.css'],
})
export class PessoasUpdateComponent implements OnInit {
  pessoas: Pessoas = {
    id: '',
    nome: '',
    cpf: '',
    data: '',
  };

  nome = new FormControl("", [Validators.required]);
  cpf = new FormControl("", [Validators.required]);
  data = new FormControl("", [Validators.required]);

  constructor(private service: PessoasService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.pessoas.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.pessoas.id!).subscribe((resposta) => {
      this.pessoas.nome = resposta.nome;
      this.pessoas.cpf = resposta.cpf;
      this.pessoas.data = resposta.data;
    });
  }

  update(): void {
    this.service.update(this.pessoas).subscribe(( resposta ) => {
      this.router.navigate(['pessoas'])
      this.service.mensagem('Pessoa atualizada com sucesso!')
    })
  }

  cancel(): void{
    this.router.navigate(['pessoas'])
  }

  getMessage() {

    if (this.nome.invalid) {
      return "Campo nome obrigatorio"
    }
    if (this.cpf.invalid) {
      return "Campo cpf obrigatorio"
    }
    if (this.data.invalid) {
      return "Campo telefone obrigatorio"
    }
    return false;
  }

}
