import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-teste-envio-dados',
  templateUrl: './teste-envio-dados.component.html',
  styleUrls: ['./teste-envio-dados.component.scss']
})
export class TesteEnvioDadosComponent implements OnInit {

  nome = new FormControl('');
  itemObjeto: String = "name";
  placeHolder: String = "Selecione o item desejado";
  isSelecaoMultipla: Boolean = true;
  listaIntens: Array<any> = [];
  desabilitado: Boolean = false;
  form: FormGroup;

  items = [
    {id: 1, name: 'Python'},
    {id: 2, name: 'Node Js'},
    {id: 3, name: 'Java'},
    {id: 4, name: 'PHP',},
    {id: 5, name: 'Django'},
    {id: 6, name: 'Angular'},
    {id: 7, name: 'Vue'},
    {id: 8, name: 'ReactJs'},
  ];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      first: ''
    });
  }

  mostrarFormularioFuncionando() {
    console.log(this.form);
  }

}
