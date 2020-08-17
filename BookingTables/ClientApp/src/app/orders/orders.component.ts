import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-counter-component',
  templateUrl: './orders.component.html'
})
export class OrdersComponent {
  public orders: IOrder[];
  public baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;

    http.get<IOrder[]>(baseUrl + 'api/orders').subscribe(result => {
      this.orders = result;
    }, error => console.error(error));
  }

  cancelled(id) {
    this.http.delete(this.baseUrl + 'api/orders/' + id).subscribe(result => {
      this.orders = this.orders.filter(order => order.id !== id);
    }, error => console.error(error));
  }
}

interface IOrder {
  id: string;
  dateStart: Date;
  timeOfBooking: number;
  countUser: number;
}
