import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chamado } from '../model/chamado.model';

@Injectable()
 
/**
* Service Produto
*/
export class ChamadoService {
 
    private apiUrl = 'http://localhost:63274/api/chamado';  // URL para web api
    //private apiUrl = 'http://luizcssoares.gear.host/api/produto';  // URL para web api
    
    chamado : Chamado;
    selectedChamado : Chamado;
    chamadoList : Chamado[];
     
    constructor(private http: HttpClient) { }
    
    getChamados(){ 
      return this.http.get<Chamado[]>(this.apiUrl);                       
  }
  
  getChamadoById(id: number) {
      //alert(this.http.get<Produto>(this.apiUrl + '/' + id));
      return this.http.get<Chamado>(this.apiUrl + '/' + id);
  }
    
  deleteChamado(id: number) {        
      return this.http.delete(this.apiUrl + '/' + id);
  }
  
  addChamado(chamado: Chamado) {
      return this.http.post(this.apiUrl, chamado);
  }
     
  updateChamado(chamado: Chamado) 
  {
      return this.http.put(this.apiUrl + '/' + chamado.id, chamado);        
  }

  editChamado(chamado: Chamado) {
      this.selectedChamado = Object.assign({}, chamado);;
  }        
}