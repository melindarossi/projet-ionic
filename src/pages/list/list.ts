import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Pizzaservice } from '../../providers/pizzaservice/pizzaservice';
import { Pizza } from '../../model/pizza';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<Pizza>=new Array<Pizza>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaservice: Pizzaservice) {
    this.selectedItem=navParams.get('item');
    this.pizzaservice.get().then(items => {
      console.log(items);
      this.items=items;
    });

  this.pizzaservice.getById(12).then(item => {
    console.log(item);
  });
}
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
