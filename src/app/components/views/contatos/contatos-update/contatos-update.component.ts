import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ContatosService } from '../contatos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contatos } from '../contatos.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contatos-update',
  templateUrl: './contatos-update.component.html',
  styleUrls: ['./contatos-update.component.css']
})
export class ContatosUpdateComponent implements OnInit {

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
    this.contatos.id = this.route.snapshot.paramMap.get('id')!
    this.findById
  }

  cancel(): void {
    this.router.navigate([`pessoas/${this.id_p}/contatos`]);
  }

  findById(): void {
    this.service.findById(this.contatos.id!).subscribe(( resposta ) => {
      this.contatos = resposta
    })
  }

  update(): void {
    this.service.update(this.contatos).subscribe(( resposta ) => {
      this.router.navigate([`pessoas/${this.id_p}/contatos`]);
      this.service.mensagem('Contato atualizado com sucesso!')
    })
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
