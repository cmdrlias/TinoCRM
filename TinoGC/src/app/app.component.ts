import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TinoGC';
	constructor() { }

	ngOnInit() {
		var chamados;

		let loc = [];
		var xhttp = new XMLHttpRequest();

		xhttp.open("GET", "https://3.16.104.196:27017/chamados", true);
		xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');

		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				loc = JSON.parse(this.response);
				console.log(loc);
				chamados = loc;
			}
		};
		xhttp.send();

		console.log(chamados);
	}
}
