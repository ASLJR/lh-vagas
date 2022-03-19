import { Injectable } from '@angular/core';
import {httpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from './models/Vagas.models';
@Injectable({
  providedIn: 'root'
})
export class VagasService {
  private url ="localhost:3000/vagas";
  getvaga: any;

  constructor(private _HttpClient: httpClient) { }

  getvagas (): Observable<Vaga[]>{
    return this._HttpClient.get<Vaga[]>(this.url);
    
    }
    cadastrarVaga(vaga:Vaga):Observable<Vaga[]>{
      return this. _HttpClient.post<Vaga[]>(this.url,vaga);

    }
    atualizarVaga(id: any,Vaga:Vaga):Observable<Vaga[]>{
      const urlAtualizar = '${this.url}/${id}';
      return this. _HttpClient.put<Vaga[]>(urlAtualizar,Vaga);
  }
  removerVaga(id: any):Observable<Vaga[]>{
    const urlDeletar = '${this.url}/${id}';
    return this. _HttpClient.delete<Vaga[]>(urlDeletar);
  }
}
