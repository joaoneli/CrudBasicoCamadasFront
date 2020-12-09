import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  CadastroCliente(){
    window.location.assign('cadastro/cliente');
  }
  ListaCliente(){
    window.location.assign('lista/cliente');
  }
  CadastroFornecedor(){
    window.location.assign('cadastro/fornecedor');
  }
  ListaFornecedor(){
    window.location.assign('lista/fornecedor');
  }

}
