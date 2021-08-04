import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  firstname = 'FirstName';
  lastname = 'LastName';
  address = 'Address';
  mobile = 'MobileNumber';
  email = 'Email-Id';
  city = 'city';
  zip = 'zip';


  constructor() {
  }

  ngOnInit(): void {
  }

}
