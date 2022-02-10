import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Email } from '../email';
import { EmailService } from '../email.service';

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
    from: '',
    subject: '',
    text: '',
    html: '',
  };

  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {
    this.email.from = `${authService.username}@angular-email.com`;
  }

  ngOnInit(): void {}

  onSubmit(email: Email) {
    // send the email off via the email service
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
