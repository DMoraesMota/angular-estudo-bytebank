import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listTransferencia: any[] = [];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpCliente: HttpClient) { }

  get transferencias() {
    return this.listTransferencia;
  }

  public todas(): Observable<Transferencia[]> {
    return this.httpCliente.get<Transferencia[]>(this.url);
  }

  public adicionar(transferencia: any): Observable<Transferencia> {

    this.hidratar(transferencia);
    return this.httpCliente.post<Transferencia>(this.url, transferencia);

  }

  public hidratar(transferencia: any) {
    transferencia.data = new Date();
  }

}
