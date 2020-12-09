import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-card-item',
  templateUrl: 'card-item.component.html',
  styleUrls: ['card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() item: any;

  constructor() {}

  ngOnInit(): void {}
}
