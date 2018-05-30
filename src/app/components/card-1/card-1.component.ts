import { Component, OnInit, Input } from '@angular/core';
import { JssService } from '../../jss.service';

@Component({
  selector: 'app-card-1',
  templateUrl: './card-1.component.html',
  styleUrls: ['./card-1.component.scss']
})
export class Card1Component implements OnInit {
  @Input() rendering: any;
  pageEditing: boolean;

  constructor(private jssService: JssService) {
    this.jssService.state.subscribe(jssState => {
      this.pageEditing = jssState.sitecore.context.pageEditing;
    });
  }

  ngOnInit() {
  }

}
