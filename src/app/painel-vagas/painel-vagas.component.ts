import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.models';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {
  'vaga': Vaga;
  private _vagasService: any;

  constructor() { }

  ngOnInit(): void {
  }
  cadastrar() {
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      (vaga: any) => { this.vaga = new Vaga(0, "", "", "", 0) },
      (err: any) => { console.log("erro ao cadastrar") }

    );
    window.location.href = "/mural";
  }
  atualizar(id: number) {
    this._vagasService.atualizarVaga(id, this.vaga).subscribe(
      (Vaga: any) => { this.vaga = new Vaga('0,"","","",""0') },
      (err: any) => { console.log("erro ao atualizar") }
    );

    window.location.href = "/mural";
  }
  excluir(id: number) {
    this._vagasService.removerVaga(id, this.vaga).subscribe(
      (Vaga: any) => { this.vaga = new Vaga('0,"","","",""0') },
      (err: any) => { console.log("erro ao excluir") },
    );

    window.location.href = "/mural";

  }
}