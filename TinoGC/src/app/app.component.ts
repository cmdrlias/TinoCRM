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
		var locais = [] ;

		let loc = [];
		var xhttp = new XMLHttpRequest();

		xhttp.open("GET", "localhost:27017/locais", true);
		xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');

		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				locais = JSON.parse(this.response);
				console.log(loc);
				locais = loc;
			}
		};
		xhttp.send();

		console.log(locais);
	}
}

