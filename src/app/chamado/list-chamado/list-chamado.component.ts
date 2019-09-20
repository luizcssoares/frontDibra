import { Component, OnInit } from '@angular/core';
import { ChamadoService } from '../../service/chamado.service';
import { Chamado } from '../../model/chamado.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-chamado',
  templateUrl: './list-chamado.component.html',
  styleUrls: ['./list-chamado.component.css']
})

export class ListChamadoComponent implements OnInit {  
  chamados: Chamado[];    
  chamado: Chamado;      
        
  constructor(private router: Router, private chamadoService: ChamadoService) { }

  ngOnInit() {
    this.chamadoService.getChamados()
      .subscribe( data => {
        this.chamados = data;
      });
  }
  
  deleteChamado(chamado: Chamado): void {          
    this.chamadoService.deleteChamado(chamado.id)
      .subscribe( () => {
        this.chamados = this.chamados.filter(u => u !== chamado);
      })     
  };

  editChamado(chamado: Chamado): void {
    
  };

  addChamado(): void {
    //this.router.navigate(['add-produto']);
  };  
}
