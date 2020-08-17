import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-counter-component',
  templateUrl: './orders.component.html'
})
export class OrdersComponent {
  public orders: Order[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Order[]>(baseUrl + 'api/table').subscribe(result => {
      this.orders = result;
    }, error => console.error(error));
  }
}

interface Order {
  id: string;
  dateStart: Date;
  timeOfBooking: number;
  countUser: number;
}
