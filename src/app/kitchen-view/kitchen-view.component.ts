import { Component, OnInit } from '@angular/core';
import { LogInViewComponent } from '../log-in-view/log-in-view.component';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-kitchen-view',
  templateUrl: './kitchen-view.component.html',
  styleUrls: ['./kitchen-view.component.css'],
})
export class KitchenViewComponent implements OnInit {
  orders:any[]=[]

  constructor(private orderService: OrderService) { 
    this.getOrders()
  }
  getOrders() {
    this.orderService.getOrder().subscribe((result) => {
      console.log(result)
      this.orders=result
    })
  }

  ngOnInit(): void { }
 
  
  }

