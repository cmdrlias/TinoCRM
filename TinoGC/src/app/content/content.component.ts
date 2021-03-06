import { Component, OnInit } from '@angular/core';
import { transition, trigger, query, style, animate, group, animateChild } from '@angular/animations';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
    trigger('transition', [
      transition('* => *', [
        query(
        ':enter',
          [style({ opacity: 0 })],
            { optional: true }
        ),
        query(
          ':leave',
           [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
          { optional: true }
        )
     ])
    ])
  ]
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
