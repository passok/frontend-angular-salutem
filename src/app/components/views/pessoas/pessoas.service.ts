import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoas } from './pessoas.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

    findAll():Observable<Pessoas[]> {
      const url = `${this.baseUrl}/pessoas`
      return this.http.get<Pessoas[]>(url)
   }

   findById(id: string):Observable<Pessoas>{
    const url =`${this.baseUrl}/pessoas/${id}`
    return this.http.get<Pessoas>(url)
   }

   create(pessoas: Pessoas): Observable<Pessoas>{
    const url = `${this.baseUrl}/pessoas`
    return this.http.post<Pessoas>(url, pessoas);
   }

   delete(id: string):Observable<void> {
    const url = `${this.baseUrl}/pessoas/${id}`
    return this.http.delete<void>(url)
   }

   update(pessoas: Pessoas): Observable<void> {
    const url = `${this.baseUrl}/pessoas/${pessoas.id}`
    return this.http.put<void>(url, pessoas)
   }

   mensagem(str: string):void{
    this._snack.open(`${str}`, 'ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
   }
}
