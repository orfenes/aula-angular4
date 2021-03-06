import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contato } from './contatos/contato.model';

export class InMemoryDataService implements InMemoryDbService{

  createDb(): {} {
    let contatos: Contato[] = [
      {id: 1, nome: 'Fulano de tal', email: 'fulano@rmail.com', telefone: '(00) 0000-0000'},
      {id: 2, nome: 'Cisliano', email: 'cisdliano@rmail.com', telefone: '(00) 0000-0000'},
      {id: 3, nome: 'Bob Esponja', email: 'bob@rmail.com', telefone: '(00) 0000-0000'}, 
      {id: 4, nome: 'Coragem cao covarde', email: 'coragem@rmail.com', telefone: '(00) 0000-0000'},
      {id: 5, nome: 'Doug Fannier', email: 'doug@rmail.com', telefone: '(00) 0000-0000'}
    ];
    
    return {contatos};
  }

  

}