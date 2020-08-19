import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-reserve-component',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  public order = {
    userName: '',
    phoneNumber: '',
    email: '',
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
      this.router.navigate(['/orders']);
    }, error => console.error(error));
  }


  ngOnInit(): void {
    this.http.get<IUser>(this.baseUrl + 'api/user/current').subscribe((data) => {
      this.order.userName = data.userName;
      this.order.phoneNumber = data.phoneNumber;
      this.order.email = data.email;

    }, error => console.error(error));
  }

}

interface IUser{
  userName: string;
  phoneNumber: string;
  email: string;
}
