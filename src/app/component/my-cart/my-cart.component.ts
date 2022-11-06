import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  Show = false;
  order = false;
  onOpen() {
    this.Show = true;
  }
  onOrder(){
    this.order = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
