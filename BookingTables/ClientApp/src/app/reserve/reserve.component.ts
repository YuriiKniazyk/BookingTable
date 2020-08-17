import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reserve-component',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent {
  public orders: Reserve[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Reserve[]>(baseUrl + 'api/table').subscribe(result => {
      this.orders = result;
    }, error => console.error(error));
  }
}

interface Reserve {
  id: string;
  dateStart: Date;
  timeOfBooking: number;
  countUser: number;
}
