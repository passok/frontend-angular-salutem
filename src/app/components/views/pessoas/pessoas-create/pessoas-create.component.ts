import { Component, OnInit } from '@angular/core';
import { Pessoas } from '../pessoas.model';
import { PessoasService } from '../pessoas.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoas-create',
  templateUrl: './pessoas-create.component.html',
  styleUrls: ['./pessoas-create.component.css']
})
export class PessoasCreateComponent implements OnInit {

  pessoas: Pessoas = {
    nome: '',
    cpf: '',
    data: '',
  }

  nome = new FormControl("", [Validators.required]);
  cpf = new FormControl("", [Validators.required]);
  data = new FormControl("", [Validators.required]);

  constructor(private service: PessoasService, private router: Router) { }

  ngOnInit(): void {
  }

  create():void {
    this.service.create(this.pessoas).subscribe(( resposta ) => {
      this.router.navigate(['pessoas']);
      this.service.mensagem('Pessoa adicionada com sucesso');
    })
  }

  cancel(): void{
    this.router.navigate(['pessoas']);
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
