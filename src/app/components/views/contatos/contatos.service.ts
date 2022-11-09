import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Contatos } from './contatos.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAllByPessoas(id_p: string): Observable<Contatos[]> {
    const url = `${this.baseUrl}/contatos?pessoas=${id_p}`
    return this.http.get<Contatos[]>(url)
  }

  findById(id: string):Observable<Contatos>{
    const url = `${this.baseUrl}/contatos/${id}`
    return this.http.get<Contatos>(url)
  }

  create(contatos: Contatos, id_p: string): Observable<Contatos> {
    const url = `${this.baseUrl}/contatos?pessoas=${id_p}`
    return this.http.post<Contatos>(url, contatos)
  }

  update(contatos: Contatos):Observable<Contatos> {
    const url = `${this.baseUrl}/contatos/${contatos.id}`
    return this.http.put<Contatos>(url, contatos)
  }

  delete(id: string):Observable<void> {
    const url = `${this.baseUrl}/contatos/${id}`
    return this.http.delete<void>(url)
  }

  mensagem(str: string):void{
    this._snack.open(`${str}`, 'ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
   }

}
