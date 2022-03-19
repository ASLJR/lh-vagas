import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.models';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {

  public vagas: Vaga[] = [];
  constructor(private vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas(){

    this.vagasService.getvaga()
        .subscribe(
          (          retorna: any[]) => {
            this.vagas = retorna.map((item: { id: any; nome: any; foto: any; descricao: any; data: any; salario:any; })=>{
              return new Vaga(
                item.id,
                item.nome,
                item.foto,
                item.descricao,
                item.salario
                );
              }
            )
          }
        )
  }
} 
