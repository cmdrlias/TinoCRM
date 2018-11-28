import { Component, OnInit } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import { environment } from '../../../environments/environment';
import { Chamado } from '../../shared/models/chamados.model';
import { ChamadoService } from '../../shared/services/chamado.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-chamado-card',
  templateUrl: './chamado-card.component.html',
  styleUrls: ['./chamado-card.component.scss']
})

export class ChamadoCardComponent implements OnInit {
  constructor() {
  }
  

  ngOnInit() {

	  $('.button-detalhes').click(function() {
		  $('.modal-detalhes').show();
	  });
	  
  }

}
