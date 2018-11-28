import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-detalhes-card',
  templateUrl: './detalhes-card.component.html',
  styleUrls: ['./detalhes-card.component.scss']
})
export class DetalhesCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  $(function() {
		  (<any>$('.datetimepicker')).datepicker();
	  });
  }

}
