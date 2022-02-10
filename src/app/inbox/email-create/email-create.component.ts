import { Component, OnInit } from '@angular/core';
import { Email } from '../email';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: Email = {
    id: '',
    to: '',
    from: 'artb@angular-email.com',
    subject: '',
    text: '',
    html: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
