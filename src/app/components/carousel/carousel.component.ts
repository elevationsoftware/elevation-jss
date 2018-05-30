import { Component, OnInit, Input } from '@angular/core';
import { JssService } from '../../jss.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() rendering: any;

  constructor(private jssService: JssService) {
    this.jssService.state.subscribe(jssState => {
      this.pageEditing = jssState.sitecore.context.pageEditing;
    });
  }
  pageEditing: boolean;


  ngOnInit() {
  }
}
