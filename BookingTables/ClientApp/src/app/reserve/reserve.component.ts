import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-reserve-component',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent {
  public order = {
    dateStart: '',
    timeOfBooking: 0,
    countUser: 0,
    tableId: ''
  };

  public baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.order.tableId = params['uuid'];
    });

    this.baseUrl = baseUrl;
  }

  reserve() {
    this.http.post(this.baseUrl + 'api/orders', this.order).subscribe((data) => {
      this.order = {
        dateStart: '',
        timeOfBooking: 0,
        countUser: 0,
        tableId: ''
      };
    }, error => console.error(error));
    console.log('user', this.order);
  }
}
