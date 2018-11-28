import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  var menu = $(".user-menu-dropdown");
	  var button = $("#dropUserMenu");

	  menu.hide();

	  button.click(function() {
		  menu.show();
	  });
	  
	  menu.mouseover(function() {
		  menu.show();
	  });
		  
	  menu.mouseout(function() {
		  menu.hide();
	  });

  }

}
