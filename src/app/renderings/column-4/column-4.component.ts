import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column-4',
  templateUrl: './column-4.component.html',
  styleUrls: ['./column-4.component.scss']
})
export class Column4Component implements OnInit {
  @Input() rendering: any;
  constructor() { }

  ngOnInit() {
  }

}
