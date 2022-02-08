import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    //with snapshot id can be extractet directly as a value, without observable.subscribe,
    // but this is not returned every change as url structure for Angular remains the same so it doesn't rerender this
    // and id remains the same as om ngOnInit()!!!!!!
    // console.log(this.route.snapshot.params['id']);

    // this.route.params.subscribe(({ id }) => {
    //{ id } -> params['id']
    // params emit evry time url changes and emits that piece which changed, here :id is changed
    // look at src/app/inbox/inbox-routing.module.ts, there path: ':id' is key of .params response!!
    // this.emailService.getEmail(id).subscribe((email) => {
    //   console.log(email);
    // });
    // });

    // best solution without nested obervables, as above, but with pipe and switchMap operator
    this.route.params
      .pipe(
        switchMap(({ id }) => {
          return this.emailService.getEmail(id);
        })
      )
      .subscribe((email) => {
        console.log(email);
      });
  }
}
