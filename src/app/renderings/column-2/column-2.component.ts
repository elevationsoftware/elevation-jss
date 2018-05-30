import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column-2',
  templateUrl: './column-2.component.html',
  styleUrls: ['./column-2.component.scss']
})
export class Column2Component implements OnInit {
  @Input() rendering: any;
  constructor() { }

  ngOnInit() {
  }

}
