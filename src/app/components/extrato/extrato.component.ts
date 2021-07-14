import { Transferencia } from './../../models/transferencia.model';
import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  public transferencias: any[] = [];

  constructor(private service: TransferenciaService) {}

  public ngOnInit(): void {
    this.service.todas().subscribe( (data: Transferencia[]) => {
      this.transferencias = data;
    });
  }

}
