import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css'],
})
export class SignoutComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.signout().subscribe(() => {
      // Navigate user back to a sinin page
      setTimeout(() => {
        this.router.navigateByUrl('/'); // navigate the user to the root of an aplication
      }, 2000);
    });
  }
}
