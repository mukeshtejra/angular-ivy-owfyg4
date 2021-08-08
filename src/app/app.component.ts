import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filterText;
  data = [
    {
      id: 1,
      first_name: 'Jeanette',
      last_name: 'Penddreth',
      email: 'jpenddreth0@census.gov',
      gender: 'Female'
    },
    {
      id: 2,
      first_name: 'Giavani',
      last_name: 'Frediani',
      email: 'gfrediani1@senate.gov',
      gender: 'Male'
    },
    {
      id: 3,
      first_name: 'Noell',
      last_name: 'Bea',
      email: 'nbea2@imageshack.us',
      gender: 'Female'
    },
    {
      id: 4,
      first_name: 'Willard',
      last_name: 'Valek',
      email: 'wvalek3@vk.com',
      gender: 'Male'
    }
  ];

  name = 'Angular ' + VERSION.major;

  filterData = [];

  ngOnInit() {
    this.filterData = [...this.data];
  }
  onChange() {
    this.filterData = this.data.filter(
      datum =>
        datum.first_name.indexOf(this.filterText) > -1 ||
        datum.last_name.indexOf(this.filterText) > -1 ||
        datum.email.indexOf(this.filterText) > -1
    );
    console.log(this.filterText);
  }
}
