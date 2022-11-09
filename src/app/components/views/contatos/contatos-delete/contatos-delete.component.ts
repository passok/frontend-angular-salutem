import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contatos } from '../contatos.model';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-contatos-delete',
  templateUrl: './contatos-delete.component.html',
  styleUrls: ['./contatos-delete.component.css']
})
export class ContatosDeleteComponent implements OnInit {


  id_p: string = ''
  contatos: Contatos = {
    id: '',
    nome: '',
    email: '',
    telefone: '',
  }

  constructor(private service: ContatosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_p = this.route.snapshot.paramMap.get('id_p')!
    this.contatos.id = this.route.snapshot.paramMap.get('id')!
    this.findById
  }

  cancel(): void {
    this.router.navigate([`pessoas/${this.id_p}/contatos`]);
  }

  delete():void {
    this.service.delete(this.contatos.id!).subscribe(( resposta ) => {
      this.router.navigate([`pessoas/${this.id_p}/contatos`]);
      this.service.mensagem('Contato excluido com sucesso!')
  })
}

  findById(): void {
    this.service.findById(this.contatos.id!).subscribe(( resposta ) => {
      this.contatos = resposta
    })
  }

}
