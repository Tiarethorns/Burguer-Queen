import { Component, OnInit } from '@angular/core';
import menu from '../../assets/json/menu.json';
import { OrderService } from '../order.service';

export interface item {
  name: string;
  price: number;
  category: string;
}

const ELEMENT_DATA: item[] = [
  { name: 'American', price: 5, category: 'Breakfast' },
  { name: 'Capuccino', price: 7, category: 'Breakfast' },
  { name: 'Cheese Sandwish', price: 10, category: 'Breakfast' },
  { name: 'Juice', price: 7, category: 'Breakfast' },
  { name: 'Simple Burguer', price: 10, category: 'Meals' },
  { name: 'Double Burguer', price: 10, category: 'Meals' },
  { name: 'fries', price: 5, category: 'Meals' },
  { name: 'Onion Rings', price: 5, category: 'Meals' },
  { name: 'Cheese Sandwish', price: 10, category: 'Meals' },
  { name: 'Water 500ml', price: 5, category: 'Meals' },
  { name: 'Water 750ml', price: 7, category: 'Meals' },
  { name: 'Gas Water 500ml', price: 7, category: 'Meals' },
];

@Component({
  selector: 'app-waiters-view',
  templateUrl: './waiters-view.component.html',
  styleUrls: ['./waiters-view.component.css'],
})
export class WaitersViewComponent implements OnInit {
  
  order:item[]=[]
  constructor(private orderService: OrderService) {
    console.log(ELEMENT_DATA);
    console.log(this.dataSource);
  }

  ngOnInit(): void {}

  displayedColumns: string[] = ['name', 'price', 'category'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<item>();
  addProducts($event: any) {
    console.log("funciona", $event)
    this.order.push($event)
    console.log(this.order)
  }
  async createOrder() {
    const NewOrder = await this.orderService.addOrder({ items:this.order })
    console.log( NewOrder )
  }

  
}
