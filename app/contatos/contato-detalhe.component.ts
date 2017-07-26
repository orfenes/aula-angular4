import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ContatoService } from './contato.service';
import { Contato } from './contato.model';

@Component({
  moduleId: module.id,
  selector: 'contato-detalhe',
  templateUrl: 'contato-detalhe.component.html',  
  styles:[`
    .ng-valid[required]{
      border: 1px solid green;
    }
  `]
})
export class ContatoDetalheComponent implements OnInit{

  contato: Contato;

  constructor(
    private contatoService: ContatoService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void{
    this.contato = new Contato(0, '', '', '');

    this.route.params.forEach((params: Params) => {      
      let id: number = +params['id']
      if(id){
        this.contatoService.getContato(id)
          .then((contato: Contato) => {
            this.contato = contato;
          })
      }      
    })
  }

  teste(): void{
    console.log(this.contato);
  }
}