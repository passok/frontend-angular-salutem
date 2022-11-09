import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ContatosService } from '../contatos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contatos } from '../contatos.model';

@Component({
  selector: 'app-contatos-create',
  templateUrl: './contatos-create.component.html',
  styleUrls: ['./contatos-create.component.css']
})
export class ContatosCreateComponent implements OnInit {

  id_p: string = ''
  contatos: Contatos = {
    id: '',
    nome: '',
    email: '',
    telefone: '',
  }

  nome = new FormControl("", [Validators.required]);
  email = new FormControl("", [Validators.email]);
  telefone = new FormControl("", [Validators.required]);


  constructor(private service: ContatosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_p = this.route.snapshot.paramMap.get('id_p')!
  }

  create(): void {
    this.service.create(this.contatos, this.id_p).subscribe( resposta => {
      this.router.navigate([`pessoas/${this.id_p}/contatos`]);
      this.service.mensagem('Contato criado com sucesso!')
    })
  }

  cancel(): void {
    this.router.navigate([`pessoas/${this.id_p}/contatos`]);
  }

  getMessage() {
    if (this.email.invalid) {
      return "Digite um email valido!"
    }
    if (this.nome.invalid) {
      return "Campo nome obrigatorio"
    }
    if (this.telefone.invalid) {
      return "Campo telefone obrigatorio"
    }
    return false;
  }

}
