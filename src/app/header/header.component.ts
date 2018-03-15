import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  idiomas: any[] = [
    {
      "descricao": "Português"
    },
    {
      "descricao": "Inglês"
    }
  ];

  itemsmenu = [
    {
        "id": "li_fila_trabalho",
        "label": "Fila de Trabalho",
        "iclass": "fa fa-th-list fa-2x",            
        "routerLink": "",
        "hasdownarrow": true,
        "subitemsmenu": []
    }];
    
  constructor() { }

  ngOnInit() {
  }

}
