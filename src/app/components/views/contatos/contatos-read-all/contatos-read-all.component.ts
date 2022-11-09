import { Component, OnInit } from '@angular/core';
import { Contatos } from '../contatos.model';
import { ContatosService } from '../contatos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contatos-read-all',
  templateUrl: './contatos-read-all.component.html',
  styleUrls: ['./contatos-read-all.component.css']
})
export class ContatosReadAllComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'telefone', 'email', 'contatos', 'acoes'];

  id_p: string = "";

  contatos: Contatos[] = []

  constructor(private service: ContatosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_p = this.route.snapshot.paramMap.get('id_p')!
    this.findAll
  }

  findAll(): void {
    this.service.findAllByPessoas(this.id_p).subscribe(( resposta ) => {
      this.contatos = resposta;
      console.log(this.contatos)
    })
  }

  navegarCriarContato(): void {
    this.router.navigate([`pessoas/${this.id_p}/contatos/create`])
  }

}
