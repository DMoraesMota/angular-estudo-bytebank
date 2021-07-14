import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from 'src/app/models/transferencia.model';
import { TransferenciaService } from 'src/app/services/transferencia.service';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  public destino: number = 0;
  public valor: number = 0;

  constructor(private service: TransferenciaService, private router: Router) {}

  ngOnInit() {}

  public transferir(): void {

    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino}

    this.service.adicionar(valorEmitir).subscribe( (data: Transferencia) => {

      this.router.navigateByUrl('extrato');

    }, (error) => {
      console.log(error);
    });

    this.limparCampos();
  }

  public limparCampos(): void {
    this.destino = 0;
    this.valor = 0;
  }
}
